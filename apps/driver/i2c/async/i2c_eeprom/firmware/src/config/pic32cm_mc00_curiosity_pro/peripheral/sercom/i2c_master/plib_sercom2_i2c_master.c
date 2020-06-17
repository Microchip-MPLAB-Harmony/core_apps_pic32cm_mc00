/*******************************************************************************
  Serial Communication Interface Inter-Integrated Circuit (SERCOM I2C) Library
  Source File

  Company:
    Microchip Technology Inc.

  File Name:
    plib_sercom2_i2c.c

  Summary:
    SERCOM I2C PLIB Implementation file

  Description:
    This file defines the interface to the SERCOM I2C peripheral library.
    This library provides access to and control of the associated peripheral
    instance.

*******************************************************************************/
// DOM-IGNORE-BEGIN
/*******************************************************************************
* Copyright (C) 2018 Microchip Technology Inc. and its subsidiaries.
*
* Subject to your compliance with these terms, you may use Microchip software
* and any derivatives exclusively with Microchip products. It is your
* responsibility to comply with third party license terms applicable to your
* use of third party software (including open source software) that may
* accompany Microchip software.
*
* THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER
* EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED
* WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A
* PARTICULAR PURPOSE.
*
* IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
* INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND
* WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS
* BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE
* FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN
* ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY,
* THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
*******************************************************************************/
// DOM-IGNORE-END

// *****************************************************************************
// *****************************************************************************
// Section: Included Files
// *****************************************************************************
// *****************************************************************************

#include "plib_sercom2_i2c_master.h"

// *****************************************************************************
// *****************************************************************************
// Section: Global Data
// *****************************************************************************
// *****************************************************************************


/* SERCOM2 I2C baud value */
#define SERCOM2_I2CM_BAUD_VALUE         (0x34U)

#define RIGHT_ALIGNED (8U)
#define TEN_BIT_ADDR_MASK (0x78U)

static SERCOM_I2C_OBJ sercom2I2CObj;

// *****************************************************************************
// *****************************************************************************
// Section: SERCOM2 I2C Implementation
// *****************************************************************************
// *****************************************************************************
// *****************************************************************************

void SERCOM2_I2C_Initialize(void)
{
    /* Reset the module */
    SERCOM2_REGS->I2CM.SERCOM_CTRLA = SERCOM_I2CM_CTRLA_SWRST_Msk ;

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Enable smart mode enable */
    SERCOM2_REGS->I2CM.SERCOM_CTRLB = SERCOM_I2CM_CTRLB_SMEN_Msk;

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Baud rate - Master Baud Rate*/
    SERCOM2_REGS->I2CM.SERCOM_BAUD = SERCOM2_I2CM_BAUD_VALUE;

    /* Set Operation Mode (Master), SDA Hold time, run in stand by and i2c master enable */
    SERCOM2_REGS->I2CM.SERCOM_CTRLA = SERCOM_I2CM_CTRLA_MODE_I2C_MASTER | SERCOM_I2CM_CTRLA_SDAHOLD_75NS | SERCOM_I2CM_CTRLA_SPEED_SM | SERCOM_I2CM_CTRLA_SCLSM(0) | SERCOM_I2CM_CTRLA_ENABLE_Msk ;

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Initial Bus State: IDLE */
    SERCOM2_REGS->I2CM.SERCOM_STATUS = SERCOM_I2CM_STATUS_BUSSTATE(0x01);

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Initialize the SERCOM2 PLib Object */
    sercom2I2CObj.error = SERCOM_I2C_ERROR_NONE;
    sercom2I2CObj.state = SERCOM_I2C_STATE_IDLE;
    sercom2I2CObj.masterCode = (0x08 | 1);

    /* Enable all Interrupts */
    SERCOM2_REGS->I2CM.SERCOM_INTENSET = SERCOM_I2CM_INTENSET_Msk;
}

static bool SERCOM2_I2C_CalculateBaudValue(uint32_t srcClkFreq, uint32_t i2cClkSpeed, uint32_t* baudVal)
{
    uint32_t baudValue;

    /* Reference clock frequency must be atleast two times the baud rate */
    if (srcClkFreq < (2*i2cClkSpeed))
    {
        return false;
    }

    if (i2cClkSpeed <= 1000000)
    {
        /* Standard, FM and FM+ baud calculation */
        baudValue = (uint32_t) (((((float)srcClkFreq)/i2cClkSpeed) - ((((float)srcClkFreq) * (100/1000000000.0)) + 10)));
    }
    else
    {
        /* HS mode baud calculation */
        baudValue = (uint32_t) (((float)srcClkFreq/i2cClkSpeed) - 2);
    }
    if (i2cClkSpeed <= 400000)
    {
        /* For I2C clock speed upto 400 kHz, the value of BAUD<7:0> determines both SCL_L and SCL_H with SCL_L = SCL_H */
        if (baudValue > (0xFF * 2))
        {
            /* Set baud rate to the minimum possible value */
            baudValue = 0xFF;
        }
        else if (baudValue <= 1)
        {
            /* Baud value cannot be 0. Set baud rate to maximum possible value */
            baudValue = 1;
        }
        else
        {
            baudValue /= 2;
        }
    }
    else
    {
        /* To maintain the ratio of SCL_L:SCL_H to 2:1, the max value of BAUD_LOW<15:8>:BAUD<7:0> can be 0xFF:0x7F. Hence BAUD_LOW + BAUD can not exceed 255+127 = 382 */
        if (baudValue >= 382)
        {
            /* Set baud rate to the minimum possible value while maintaining SCL_L:SCL_H to 2:1 */
            baudValue = (0xFF << 8) | (0x7F);
        }
        else if (baudValue <= 3)
        {
            /* Baud value cannot be 0. Set baud rate to maximum possible value while maintaining SCL_L:SCL_H to 2:1 */
            baudValue = (2 << 8) | 1;
        }
        else
        {
            /* For Fm+ mode, I2C SCL_L:SCL_H to 2:1 */
            baudValue  = ((((baudValue * 2)/3) << 8) | (baudValue/3));
        }
    }
    *baudVal = baudValue;
    return true;
}

bool SERCOM2_I2C_TransferSetup(SERCOM_I2C_TRANSFER_SETUP* setup, uint32_t srcClkFreq )
{
    uint32_t baudValue;
    uint32_t i2cClkSpeed;
    uint32_t i2cSpeedMode = 0;
    uint32_t hsbaudValue;

    if (setup == NULL)
    {
        return false;
    }

    i2cClkSpeed = setup->clkSpeed;

    if( srcClkFreq == 0)
    {
        srcClkFreq = 48000000UL;
    }

    if (i2cClkSpeed > 1000000)
    {
        /* HS mode requires baud values for both 400kHz and HS frequency. First calculate baud for 400kHz */
        if (SERCOM2_I2C_CalculateBaudValue(srcClkFreq, 400000, &baudValue) == false)
        {
            return false;
        }
    }
    else
    {
        if (SERCOM2_I2C_CalculateBaudValue(srcClkFreq, i2cClkSpeed, &baudValue) == false)
        {
            return false;
        }
    }

    if (i2cClkSpeed > 1000000)
    {
        /* Now calculate HS baud value */
        if (SERCOM2_I2C_CalculateBaudValue(srcClkFreq, i2cClkSpeed, &hsbaudValue) == false)
        {
            return false;
        }
        else
        {
            baudValue |= (hsbaudValue << 16);
            i2cSpeedMode = 2;
        }
    }
    else if (i2cClkSpeed > 400000)
    {
        i2cSpeedMode = 1;
    }

    /* Disable the I2C before changing the I2C clock speed */
    SERCOM2_REGS->I2CM.SERCOM_CTRLA &= ~SERCOM_I2CM_CTRLA_ENABLE_Msk;

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Baud rate - Master Baud Rate*/
    SERCOM2_REGS->I2CM.SERCOM_BAUD = baudValue;

    SERCOM2_REGS->I2CM.SERCOM_CTRLA  = ((SERCOM2_REGS->I2CM.SERCOM_CTRLA & ~SERCOM_I2CM_CTRLA_SPEED_Msk) | (SERCOM_I2CM_CTRLA_SPEED(i2cSpeedMode)));

    /* Re-enable the I2C module */
    SERCOM2_REGS->I2CM.SERCOM_CTRLA |= SERCOM_I2CM_CTRLA_ENABLE_Msk;

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Since the I2C module was disabled, re-initialize the bus state to IDLE */
    SERCOM2_REGS->I2CM.SERCOM_STATUS = SERCOM_I2CM_STATUS_BUSSTATE(0x01);

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    return true;
}

void SERCOM2_I2C_CallbackRegister(SERCOM_I2C_CALLBACK callback, uintptr_t contextHandle)
{
    sercom2I2CObj.callback = callback;

    sercom2I2CObj.context  = contextHandle;
}

static void SERCOM2_I2C_SendAddress(uint16_t address, bool dir)
{
    bool isTenBitAddress = false;
    bool isHighSpeed = false;
    bool transferDir = dir;

    /* Check for 10-bit address */
    if(address > 0x007F)
    {
        if ((sercom2I2CObj.isHighSpeed == true) && (sercom2I2CObj.txMasterCode == true))
        {
            /* write: <0000-1nnn> <Sr> <1111-10xxW> <xxxx-xxxx> <write-data> <P>
               read: <0000-1nnn> <Sr> <1111-10xxW> <xxxx-xxxx> <Sr> <1111-10xxR> <read-data> <P>
            */

            /* Next state will be to transmit slave address with HS mode enabled */
            sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_ADDR_HS;
        }
        else
        {
            isTenBitAddress = true;
            transferDir = I2C_TRANSFER_WRITE;

            if(dir == I2C_TRANSFER_READ)
            {
                /* <Sr> <1111-10xxW> <xxxx-xxxx> <Sr> <1111-10xxR> <read-data> <P> */

                /* Next state will be to send slave address followed by Sr */
                sercom2I2CObj.state = SERCOM_I2C_STATE_ADDR_SEND;

                if (sercom2I2CObj.isHighSpeed == true)
                {
                    /* We are in HS mode and Master code is already transmitted out */
                    isHighSpeed = true;
                }
            }
            else
            {
                /* <Sr> <1111-10xxW> <xxxx-xxxx> <write-data> <P>  */

                sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_WRITE;

                if (sercom2I2CObj.isHighSpeed == true)
                {
                    /* We are in HS mode and Master code is already transmitted out */
                    isHighSpeed = true;
                }
            }
        }
    }
    else
    {
        if ((sercom2I2CObj.isHighSpeed == true) && (sercom2I2CObj.txMasterCode == true))
        {
            /* write: <0000-1nnn> <Sr> <xxxx-xxxW> <write-data> <P>
               read: <0000-1nnn> <Sr> <xxxx-xxxR> <read-data> <P>
            */

            /* Next state will be to transmit slave address with HS mode enabled */
            sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_ADDR_HS;
        }
        else
        {
            if(dir == I2C_TRANSFER_READ)
            {
                /* <xxxx-xxxR> <read-data> <P> */

                /* Next state will be to read data */
                sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_READ;

                if (sercom2I2CObj.isHighSpeed == true)
                {
                    /* We are in HS mode and Master code is already transmitted out */
                    isHighSpeed = true;
                }
            }
            else
            {
                /* <xxxx-xxxW> <write-data> <P> */

                /* Next state will be to write data */
                sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_WRITE;

                if (sercom2I2CObj.isHighSpeed == true)
                {
                    /* We are in HS mode and Master code is already transmitted out */
                    isHighSpeed = true;
                }
            }
        }
    }

    if (sercom2I2CObj.txMasterCode == true)
    {
        /* Transmit masterCode */
        SERCOM2_REGS->I2CM.SERCOM_ADDR = sercom2I2CObj.masterCode;
    }
    else
    {
        SERCOM2_REGS->I2CM.SERCOM_ADDR = SERCOM_I2CM_ADDR_TENBITEN(isTenBitAddress == true? 1: 0) | SERCOM_I2CM_ADDR_HS(isHighSpeed == true? 1: 0) | (address << 1) | transferDir;
    }

    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);
}

static void SERCOM2_I2C_InitiateTransfer(uint16_t address, bool dir)
{
    sercom2I2CObj.writeCount = 0;
    sercom2I2CObj.readCount = 0;

    /* Clear all flags */
    SERCOM2_REGS->I2CM.SERCOM_INTFLAG = SERCOM_I2CM_INTFLAG_Msk;


    /* Smart mode enabled with SCLSM = 0, - ACK is set to send while receiving the data */
    SERCOM2_REGS->I2CM.SERCOM_CTRLB &= ~SERCOM_I2CM_CTRLB_ACKACT_Msk;


    /* Wait for synchronization */
    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

    /* Reset Error Information */
    sercom2I2CObj.error = SERCOM_I2C_ERROR_NONE;

    SERCOM2_I2C_SendAddress(address, dir);
}

static bool SERCOM2_I2C_XferSetup(
    uint16_t address,
    uint8_t* wrData,
    uint32_t wrLength,
    uint8_t* rdData,
    uint32_t rdLength,
    bool dir,
    bool isHighSpeed
)
{
    /* Check for ongoing transfer */
    if(sercom2I2CObj.state != SERCOM_I2C_STATE_IDLE)
    {
        return false;
    }

    sercom2I2CObj.address        = address;
    sercom2I2CObj.readBuffer     = rdData;
    sercom2I2CObj.readSize       = rdLength;
    sercom2I2CObj.writeBuffer    = wrData;
    sercom2I2CObj.writeSize      = wrLength;
    sercom2I2CObj.transferDir    = dir;
    sercom2I2CObj.isHighSpeed    = isHighSpeed;
    sercom2I2CObj.error          = SERCOM_I2C_ERROR_NONE;

    if (isHighSpeed == true)
    {
        sercom2I2CObj.txMasterCode = true;
    }
    else
    {
        sercom2I2CObj.txMasterCode = false;
    }

    SERCOM2_I2C_InitiateTransfer(address, dir);

    return true;
}

bool SERCOM2_I2C_Read(uint16_t address, uint8_t* rdData, uint32_t rdLength)
{
    return SERCOM2_I2C_XferSetup(address, NULL, 0, rdData, rdLength, I2C_TRANSFER_READ, false);
}

bool SERCOM2_I2C_Write(uint16_t address, uint8_t* wrData, uint32_t wrLength)
{
    return SERCOM2_I2C_XferSetup(address, wrData, wrLength, NULL, 0, I2C_TRANSFER_WRITE, false);
}

bool SERCOM2_I2C_WriteRead(uint16_t address, uint8_t* wrData, uint32_t wrLength, uint8_t* rdData, uint32_t rdLength)
{
    return SERCOM2_I2C_XferSetup(address, wrData, wrLength, rdData, rdLength, I2C_TRANSFER_WRITE, false);
}

bool SERCOM2_I2C_Read_HighSpeed(uint16_t address, uint8_t* rdData, uint32_t rdLength)
{
    return SERCOM2_I2C_XferSetup(address, NULL, 0, rdData, rdLength, I2C_TRANSFER_READ, true);
}

bool SERCOM2_I2C_Write_HighSpeed(uint16_t address, uint8_t* wrData, uint32_t wrLength)
{
    return SERCOM2_I2C_XferSetup(address, wrData, wrLength, NULL, 0, I2C_TRANSFER_WRITE, true);
}

bool SERCOM2_I2C_WriteRead_HighSpeed(uint16_t address, uint8_t* wrData, uint32_t wrLength, uint8_t* rdData, uint32_t rdLength)
{
    return SERCOM2_I2C_XferSetup(address, wrData, wrLength, rdData, rdLength, I2C_TRANSFER_WRITE, true);
}

bool SERCOM2_I2C_IsBusy(void)
{
    if((sercom2I2CObj.state == SERCOM_I2C_STATE_IDLE) && ((SERCOM2_REGS->I2CM.SERCOM_STATUS & SERCOM_I2CM_STATUS_BUSSTATE_Msk) == SERCOM_I2CM_STATUS_BUSSTATE(0x01)))
    {
        return false;
    }
    else
    {
        return true;
    }
}

SERCOM_I2C_ERROR SERCOM2_I2C_ErrorGet(void)
{
    return sercom2I2CObj.error;
}

void SERCOM2_I2C_InterruptHandler(void)
{
    if(SERCOM2_REGS->I2CM.SERCOM_INTENSET != 0)
    {
        /* Checks if the arbitration lost in multi-master scenario */
        if((SERCOM2_REGS->I2CM.SERCOM_STATUS & SERCOM_I2CM_STATUS_ARBLOST_Msk) == SERCOM_I2CM_STATUS_ARBLOST_Msk)
        {
            /*
             * Re-initiate the transfer if arbitration is lost
             * in between of the transfer
             */
            sercom2I2CObj.state = SERCOM_I2C_REINITIATE_TRANSFER;

        }
        /* Check for Bus Error during transmission */
        else if((SERCOM2_REGS->I2CM.SERCOM_STATUS & SERCOM_I2CM_STATUS_BUSERR_Msk) == SERCOM_I2CM_STATUS_BUSERR_Msk)
        {
            /* Set Error status */
            sercom2I2CObj.state = SERCOM_I2C_STATE_ERROR;
            sercom2I2CObj.error = SERCOM_I2C_ERROR_BUS;
        }
        /* Checks slave acknowledge for address or data */
        else if( (sercom2I2CObj.txMasterCode == false) && ((SERCOM2_REGS->I2CM.SERCOM_STATUS & SERCOM_I2CM_STATUS_RXNACK_Msk) == SERCOM_I2CM_STATUS_RXNACK_Msk))
        {
            sercom2I2CObj.state = SERCOM_I2C_STATE_ERROR;
            sercom2I2CObj.error = SERCOM_I2C_ERROR_NAK;
        }
        else
        {
            switch(sercom2I2CObj.state)
            {
                case SERCOM_I2C_REINITIATE_TRANSFER:

                    if (sercom2I2CObj.writeSize != 0)
                    {
                        /* Initiate Write transfer */
                        SERCOM2_I2C_InitiateTransfer(sercom2I2CObj.address, false);
                    }
                    else
                    {
                        /* Initiate Read transfer */
                        SERCOM2_I2C_InitiateTransfer(sercom2I2CObj.address, true);
                    }

                    break;


                case SERCOM_I2C_STATE_IDLE:

                    break;

                case SERCOM_I2C_STATE_ADDR_SEND:

                    /*
                     * Send slave address for a read operation with 10-bit addressing enabled
					 * Write ADDR[7:0] register to "11110 address[9:8] 1"
                     * ADDR.TENBITEN must be cleared
                     */
                    SERCOM2_REGS->I2CM.SERCOM_ADDR = SERCOM_I2CM_ADDR_HS(sercom2I2CObj.isHighSpeed == true? 1: 0) | ((sercom2I2CObj.address >> RIGHT_ALIGNED) << 1) | I2C_TRANSFER_READ;

                    /* Wait for synchronization */
                    while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

                    sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_READ;

                    break;

                case SERCOM_I2C_STATE_TRANSFER_ADDR_HS:

                    sercom2I2CObj.txMasterCode = false;

                    /* At this point, master code is already transmitted out. Now send the slave address (7 or 10-bit) */
                    SERCOM2_I2C_SendAddress(sercom2I2CObj.address, sercom2I2CObj.transferDir);

                    break;

                case SERCOM_I2C_STATE_TRANSFER_WRITE:

                    if (sercom2I2CObj.writeCount == (sercom2I2CObj.writeSize))
                    {
                        if(sercom2I2CObj.readSize != 0)
                        {

                            if(sercom2I2CObj.address > 0x007F)
                            {
                                /*
                                 * Write ADDR[7:0] register to "11110 address[9:8] 1"
                                 * ADDR.TENBITEN must be cleared
                                 */
                                SERCOM2_REGS->I2CM.SERCOM_ADDR = SERCOM_I2CM_ADDR_HS(sercom2I2CObj.isHighSpeed == true? 1: 0) | ((sercom2I2CObj.address >> RIGHT_ALIGNED) << 1) | I2C_TRANSFER_READ;
                            }
                            else
                            {
                                /* Write 7bit address with direction (ADDR.ADDR[0]) equal to 1*/
                                SERCOM2_REGS->I2CM.SERCOM_ADDR = SERCOM_I2CM_ADDR_HS(sercom2I2CObj.isHighSpeed == true? 1: 0) | (sercom2I2CObj.address << 1) | I2C_TRANSFER_READ;
                            }

                            /* Wait for synchronization */
                            while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

                            sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_READ;

                        }
                        else
                        {
                            SERCOM2_REGS->I2CM.SERCOM_CTRLB |= SERCOM_I2CM_CTRLB_CMD(3);

                            /* Wait for synchronization */
                            while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

                            sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_DONE;
                        }
                    }
                    /* Write next byte */
                    else
                    {
                        SERCOM2_REGS->I2CM.SERCOM_DATA = sercom2I2CObj.writeBuffer[sercom2I2CObj.writeCount++];
                    }

                    break;

                case SERCOM_I2C_STATE_TRANSFER_READ:

                    if(sercom2I2CObj.readCount == (sercom2I2CObj.readSize - 1))
                    {
                        /* Set NACK and send stop condition to the slave from master */
                        SERCOM2_REGS->I2CM.SERCOM_CTRLB |= SERCOM_I2CM_CTRLB_ACKACT_Msk | SERCOM_I2CM_CTRLB_CMD(3);

                        /* Wait for synchronization */
                        while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

                        sercom2I2CObj.state = SERCOM_I2C_STATE_TRANSFER_DONE;
                    }

                    /* Read the received data */
                    sercom2I2CObj.readBuffer[sercom2I2CObj.readCount++] = SERCOM2_REGS->I2CM.SERCOM_DATA;




                    break;

                default:

                    break;
            }
        }

        /* Error Status */
        if(sercom2I2CObj.state == SERCOM_I2C_STATE_ERROR)
        {
            /* Reset the PLib objects and Interrupts */
            sercom2I2CObj.state = SERCOM_I2C_STATE_IDLE;

            /* Generate STOP condition */
            SERCOM2_REGS->I2CM.SERCOM_CTRLB |= SERCOM_I2CM_CTRLB_CMD(3);

            /* Wait for synchronization */
            while(SERCOM2_REGS->I2CM.SERCOM_SYNCBUSY);

            SERCOM2_REGS->I2CM.SERCOM_INTFLAG = SERCOM_I2CM_INTFLAG_Msk;

            if (sercom2I2CObj.callback != NULL)
            {
                sercom2I2CObj.callback(sercom2I2CObj.context);
            }
        }
        /* Transfer Complete */
        else if(sercom2I2CObj.state == SERCOM_I2C_STATE_TRANSFER_DONE)
        {
            /* Reset the PLib objects and interrupts */
            sercom2I2CObj.state = SERCOM_I2C_STATE_IDLE;
            sercom2I2CObj.error = SERCOM_I2C_ERROR_NONE;

            SERCOM2_REGS->I2CM.SERCOM_INTFLAG = SERCOM_I2CM_INTFLAG_Msk;

            /* Wait for the NAK and STOP bit to be transmitted out and I2C state machine to rest in IDLE state */
            while((SERCOM2_REGS->I2CM.SERCOM_STATUS & SERCOM_I2CM_STATUS_BUSSTATE_Msk) != SERCOM_I2CM_STATUS_BUSSTATE(0x01));

            if(sercom2I2CObj.callback != NULL)
            {
                sercom2I2CObj.callback(sercom2I2CObj.context);
            }

        }
    }

    return;
}