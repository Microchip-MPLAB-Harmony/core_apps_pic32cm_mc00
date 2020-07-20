var myVariable = `
{
  
  "0": {
    "title": "I2C driver asynchronous - I2C EEPROM",
    "content": ". I2C driver asynchronous - I2C EEPROM . This example application shows how to use the I2C driver in asynchronous mode to perform operations on the EEPROM. . Description . This example uses the I2C driver in asynchronous mode to communicate with the EEPROM to perform write and read operations in Bare-Metal environment. This application uses I2C driver to read and write data from an AT24CM02 EEPROM device. . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/driver/i2c/async/i2c_eeprom/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . To run the demo, the following additional hardware are required: One EEPROM 3 Click board | One mikroBUS Xplained Pro boards | . | Connect mikroBUS Xplained Pro board to EXT1 header | Plug the EEPROM 3 click Board into the MikroBus socket of the mikroBUS Xplained Pro board | Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Build and program the application using its IDE | LED indicates success or failure: The LED is turned ON when the value read from the EEPROM matched with the written value | . | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/driver/i2c/async/i2c_eeprom/readme.html",
    "relUrl": "/apps/driver/i2c/async/i2c_eeprom/readme.html"
  }
  ,"1": {
    "title": "SPI Driver asynchronous - multi client",
    "content": ". SPI Driver asynchronous - multi client . This example demonstrates how to use single instance of the SPI driver in asynchronous mode to communicate with multiple EEPROMs. . Description . This example write and read data to and from two separate EEPROM connected over the same SPI bus by using the multi client feature of the driver.The example also demonstrates how to setup two different EEPROM transfers at different baud rates. . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/driver/spi/async/spi_multi_slave/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . To run the demo, the following additional hardware are required: Two EEPROM 4 Click boards | Two mikroBUS Xplained Pro boards | . | Install EEPROM 4 Click boards on to the mikroBUS Xplained Pro boards | Connect mikroBUS Xplained Pro boards on to the “EXT1” and “EXT2” headers | Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Build and program the application using its IDE | LED indicates success or failure: The LED is turned ON when the value read from the EEPROM matched with the written value | . | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/driver/spi/async/spi_multi_slave/readme.html",
    "relUrl": "/apps/driver/spi/async/spi_multi_slave/readme.html"
  }
  ,"2": {
    "title": "USART driver asynchronous - UART echo",
    "content": ". USART driver asynchronous - UART echo . This example echoes the received characters over the console using the USART driver in asynchronous mode. . Description . This example uses the USART driver in asynchronous mode in Bare-Metal environment to communicate over the console. It receives and echo’s back the characters entered by the user. . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/driver/usart/async/usart_echo/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Open the Terminal application (Ex.:Tera term) on the computer | Connect to the EDBG Virtual COM port and configure the serial settings as follows: Baud : 115200 | Data : 8 Bits | Parity : None | Stop : 1 Bit | Flow Control : None | . | Build and Program the application using its IDE | Type a character and observe the output on the console as shown below: . . | LED toggles each time the character is echoed | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/driver/usart/async/usart_echo/readme.html",
    "relUrl": "/apps/driver/usart/async/usart_echo/readme.html"
  }
  ,"3": {
    "title": "USART driver synchronous - UART echo",
    "content": ". USART driver synchronous - UART echo . This example echoes the received characters over the console using the USART driver in synchronous mode. . Description . This example uses the USART driver in synchronous mode in Bare-Metal environment to communicate over the console. It receives and echo’s back the characters entered by the user. . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/driver/usart/sync/usart_echo/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro_freertos.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro_freertos.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Open the Terminal application (Ex.:Tera term) on the computer | Connect to the EDBG Virtual COM port and configure the serial settings as follows: Baud : 115200 | Data : 8 Bits | Parity : None | Stop : 1 Bit | Flow Control : None | . | Build and Program the application using its IDE | Type a character and observe the output on the console as shown below: . . | LED toggles each time the character is echoed | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/driver/usart/sync/usart_echo/readme.html",
    "relUrl": "/apps/driver/usart/sync/usart_echo/readme.html"
  }
  ,"4": {
    "title": "FAT filesystem using NVM driver",
    "content": ". FAT filesystem using NVM driver . This application shows an example of implementing a FAT disk in the device internal Flash memory. . Description . File System Operations on NVM: . Application places a FAT disk image consisting of a Master Boot Record (MBR) sector, Logical Boot Sector, File allocation Table, and Root Directory Area in the internal Flash memory (NVM). During execution, the application first opens an existing file named FILE.TXT and performs following file system related operations: . SYS_FS_FileStat | SYS_FS_FileSize | SYS_FS_FileSeek | SYS_FS_FileEOF | . It tries to read the file and checks if string “Data” is present. If present it continues to next step or it fails the application. Finally, the string “Hello World” is written to this file. The string is then read and compared with the string that was written to the file. If the string compare is successful, An LED indication is provided. . File system layer uses: . Memory driver to communicate with underlying NVM media | . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/fs/nvm_fat/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Build and program the application using its IDE | Press Switch to start the file operations | The LED is turned ON when the File “FILE.TXT” has the app data “Hello World” written in it | Refer to the following table for switch and LED name: . Board Switch name LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | SW0 | LED0 | .   |   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/fs/nvm_fat/readme.html",
    "relUrl": "/apps/fs/nvm_fat/readme.html"
  }
  ,"5": {
    "title": "FAT filesystem using SD-SPI driver",
    "content": ". FAT filesystem using SD-SPI driver . This application shows an example of using the MPLAB Harmony File System to access and modify the contents of a SD card using the SDSPI driver and the SPI PLIB. . Description . File System Operations on the SD Card: . Application opens a file named FILE_TOO_LONG_NAME_EXAMPLE_123.JPG in the root directory of the SD card and reads its content into memory | Application creates directory named Dir1 in the root directory | Application creates a new file named FILE_TOO_LONG_NAME_EXAMPLE_123.JPG inside Dir1 | Application copies the content from step 1 into this newly created file | . The reason for choosing a JPEG file for test purposes is that the duplicate file, Dir1/FILE_TOO_LONG_NAME_EXAMPLE_123.JPG created by the demonstration could be easily verified for correctness.If the new file inside Dir1 opens for viewing on the computer and matches to original image, the test is deemed to have passed. Otherwise, if the file does not open (i.e., is corrupted), the test will be considered to have failed. . Note: . Since the application creates a directory named Dir1, it is important that the a folder with the same name does not exist on the SD card. If a directory named Dir1 is already present on the SD card, the application will fail. . File system layer uses: . SDSPI Driver to communicate to SD Card over SPI interface. | . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/fs/sdspi_fat/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . To run the demo, the following additional hardware are required: One IO1 Xplained Pro Extension Kit | One micro-sd card | . | Connect IO1 Xplained Pro Extension Kit to the EXT1 header | Insert the micro-SD Card in the micro-SD Card slot of the IO1 Xplained Pro Extension Kit | Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Build and program the application using its IDE | Press Switch to start the file operations | The LED is turned ON if there was no error during creating the directory and copying the file into it | Refer to the following table for switch and LED name: . Board Switch name LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | SW0 | LED0 | .   |   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/fs/sdspi_fat/readme.html",
    "relUrl": "/apps/fs/sdspi_fat/readme.html"
  }
  ,"6": {
    "title": "FreeRTOS basic",
    "content": ". FreeRTOS basic . This example application blinks an LED to show the FreeRTOS threads that are running and to indicate status. . Description . This demonstration creates three tasks and a queue. Task1 sends message to Task2 and Task3 to unblock and toggle an LED. Task1 priority is low compared to Task2 and Task3 which shares same priority. . Task1: This task sends the data (i.e. delay, the amount of time for which the task need blocked) to Task2 and Task3 using a queue, then Task1 blocks itself for 200ms to allow other tasks to schedule and run | Task2: This task blocks until it receives the data from queue, if the Task2 receives the expected delay (i.e. 1000ms) from Task1 then toggles the LED and blocks itself for the amount of delay received | Task3: This task blocks until it receives the data from queue, if the Task3 receives the expected delay (i.e. 100ms) from Task1 then toggles the LED and blocks itself for the amount of delay received | . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/rtos/freertos/basic_freertos/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Build and program the application using its IDE | The LED indicates the success or failure. The LED toggles on success i.e. each time when the Task2 or Task3 receives a valid message | . | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/rtos/freertos/basic_freertos/readme.html",
    "relUrl": "/apps/rtos/freertos/basic_freertos/readme.html"
  }
  ,"7": {
    "title": "Console Debug System Service using UART",
    "content": ". Console Debug System Service using UART . This example application demonstrates the UART based console and debug system service. . Description . The application example first demonstrates the various debug system service macros. It then demonstrates the console related APIs. The application asks the user to enter a character on the console which is echoed back using the console system service read/write APIs. . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/system/console_debug/sys_console_debug_uart_read_write/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Open the Terminal application (Ex.:Tera term) on the computer | Connect to the EDBG Virtual COM port and configure the serial settings as follows: Baud : 115200 | Data : 8 Bits | Parity : None | Stop : 1 Bit | Flow Control : None | . | Build and Program the application using its IDE | Observe the following output on the terminal . . First few prints demonstrate the output from the debug system service APIs | It then prints the free space available in the receive buffer | It then asks the user to enter 10 characters | . | After entering 10 characters, observe the following output on the terminal . . The output first prints the free space available in the receive buffer | Since 10 characters are pending to be read out from the receive buffer, the free space in the receive buffer is reduced by 10 | After this, it prints the received characters on the terminal | Application then waits for the transmit buffer to become empty | Once empty, the application prints the free space available in the transmit buffer, which should be same as the size of the transmit buffer configured in MHC minus 1 | . | After this, the demonstration asks the user to enter a character, and echoes it back on the terminal. . . LED toggles every-time the character is printed on the terminal | . | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/system/console_debug/sys_console_debug_uart_read_write/readme.html",
    "relUrl": "/apps/system/console_debug/sys_console_debug_uart_read_write/readme.html"
  }
  ,"8": {
    "title": "Time system service multi-client",
    "content": ". Time System Service multi-client . This example application demonstrates the multi-client system timer functionality . Description . This application demonstrates timer functionality (with two clients to the Time System Service) by periodically printing a message on console every two seconds and blinking an LED every one second. . Delay, counter and single shot timer functionality is demonstrated on a switch press. . On a switch press, the application reads the current value of the 64 bit counter (say, count 1). It then starts a delay of 500 milliseconds and waits for the delay to expire. Once the delay has expired, the application again reads the current value of the 64 bit counter (say, count 2) and calculates the difference between the two counter values. . The difference count indicates the time spent for the delay and is printed on the console as, “Delay time = x ms”, where x is the delay value and is equal to 500 milliseconds in the given example. . The application then starts a single shot timer of 100 milliseconds. When the single shot timer expires, a message is printed on the console that says “Single shot timer of 100 ms expired”. This message is printed only once on every switch press. . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Path of the application within the repository is apps/system/time/sys_time_multiclient/firmware . . To build the application, refer to the following table and open the project using its IDE. . Project Name Description . pic32cm_mc00_curiosity_pro.X | MPLABX project for PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up the hardware . The following table shows the target hardware for the application projects. . Project Name Board . pic32cm_mc00_curiosity_pro.X | PIC32CM MC00 Curiosity Pro Evaluation Kit | .   |   | . Setting up PIC32CM MC00 Curiosity Pro Evaluation Kit . Connect the Debug USB port on the board to the computer using a micro USB cable | . Running the Application . Open the Terminal application (Ex.:Tera term) on the computer | Connect to the EDBG Virtual COM port and configure the serial settings as follows: Baud : 115200 | Data : 8 Bits | Parity : None | Stop : 1 Bit | Flow Control : None | . | Build and Program the application using its IDE | Observe the following message getting printed on the console every two seconds . . | Press the switch and observe the following output on the terminal (highlighted in red box) . . “Delay time = 500 ms” indicates the amount of time spent during the delay | “Single shot timer of 100 ms expired” is printed only once on every switch press | . | LED indicates the periodic timer functionality LED is toggled periodically every one second | . | Refer to the following table for LED name: . Board LED Name . PIC32CM MC00 Curiosity Pro Evaluation Kit | LED0 | .   |   | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/apps/system/time/sys_time_multiclient/readme.html",
    "relUrl": "/apps/system/time/sys_time_multiclient/readme.html"
  }
  ,"9": {
    "title": "",
    "content": "IMPORTANT: READ CAREFULLY . MICROCHIP IS WILLING TO LICENSE THIS INTEGRATED SOFTWARE FRAMEWORK SOFTWARE AND ACCOMPANYING DOCUMENTATION OFFERED TO YOU ONLY ON THE CONDITION THAT YOU ACCEPT ALL OF THE FOLLOWING TERMS. TO ACCEPT THE TERMS OF THIS LICENSE, CLICK “I ACCEPT” AND PROCEED WITH THE DOWNLOAD OR INSTALL. IF YOU DO NOT ACCEPT THESE LICENSE TERMS, CLICK “I DO NOT ACCEPT,” AND DO NOT DOWNLOAD OR INSTALL THIS SOFTWARE. . NON-EXCLUSIVE SOFTWARE LICENSE AGREEMENT FOR MICROCHIP MPLAB HARMONY INTEGRATED SOFTWARE FRAMEWORK . This Nonexclusive Software License Agreement (“Agreement”) is between you, your heirs, agents, successors and assigns (“Licensee”) and Microchip Technology Incorporated, a Delaware corporation, with a principal place of business at 2355 W. Chandler Blvd., Chandler, AZ 85224-6199, and its subsidiary, Microchip Technology (Barbados) II Incorporated (collectively, “Microchip”) for Microchip’s MPLAB Harmony Integrated Software Framework (“Software”) and accompanying documentation (“Documentation”). The Software and Documentation are licensed under this Agreement and not sold. U.S. copyright laws and international copyright treaties, and other intellectual property laws and treaties protect the Software and Documentation. Microchip reserves all rights not expressly granted to Licensee in this Agreement. . License and Sublicense Grant. . (a) Definitions. As used this Agreement, the following terms shall have the meanings defined below: . (i) &quot;Licensee Products&quot; means Licensee products that use or incorporate Microchip Products. (ii) &quot;Microchip Product&quot; means Microchip 16-bit and 32-bit microcontrollers, digital signal controllers or other Microchip semiconductor products with PIC16 and PIC18 prefix and specifically excepting the CX870 and CY920, which are not covered under this Agreement, that use or implement the Software. (iii) &quot;Object Code&quot; means the Software computer programming code provided by Microchip that is in binary form (including related documentation, if any) and error corrections, improvements and updates to such code provided by Microchip in its sole discretion, if any. (iv) &quot;Source Code&quot; means the Software computer programming code provided by Microchip that may be printed out or displayed in human readable form (including related programmer comments and documentation, if any), and error corrections, improvements, updates, modifications and derivatives of such code developed by Microchip, Licensee or Third Party. (v) &quot;Third Party&quot; means Licensee&#39;s agents, representatives, consultants, clients, customers, or contract manufacturers. (vi) &quot;Third Party Products&quot; means Third Party products that use or incorporate Microchip Products. . (b) Software License Grant. Subject to the terms of this Agreement, Microchip grants strictly to Licensee a personal, worldwide, non-exclusive, non-transferable limited license to use, modify (except as limited by Section 1(f) below), copy and distribute the Software only when the Software is embedded on a Microchip Product that is integrated into Licensee Product or Third Party Product pursuant to Section 2(d) below. . Any portion of the Software (including derivatives or modifications thereof) may not be: . (i) embedded on a non-Microchip microcontroller or digital signal controller; (ii) distributed (in Source Code or Object Code), except as described in Section 2(d) below. . (c) Documentation License Grant. Subject to all of the terms and conditions of this Agreement, Microchip grants strictly to Licensee a perpetual, worldwide, non-exclusive license to use the Documentation in support of Licensee’s use of the Software. . (d) Sublicense Grants. Subject to terms of this Agreement, Licensee may grant a limited sublicense to a Third Party to use the Software as described below only if such Third Party expressly agrees to be bound by terms of confidentiality and limited use that are no broader in scope and duration than the confidentiality and limited use terms of this Agreement: . (i) Third Party may modify Source Code for Licensee, except as limited by Section 1(f) below. (ii) Third Party may program Software into Microchip Products for Licensee. (iii) Third Party may use Software to develop and/or manufacture Licensee Product. (iv) Third Party may use Software to develop and/or manufacture Third Party Products where either: (x) the sublicensed Software contains Source Code modified or otherwise optimized by Licensee for Third Party use; or (y) the sublicensed Software is programmed into Microchip Products by Licensee on behalf of such Third Party. (v) Third Party may use the Documentation in support of Third Party&#39;s authorized use of the Software in conformance with this Section 2(d). . (e) Audit. Authorized representatives of Microchip shall have the right to reasonably inspect Licensee’s premises and to audit Licensee’s records and inventory of Licensee Products, whether located on Licensee’s premises or elsewhere at any time, announced or unannounced, and in its sole and absolute discretion, in order to ensure Licensee’s adherence to the terms of this Agreement. . (f) License and Sublicense Limitation. This Section 1 does not grant Licensee or any Third Party the right to modify any dotstack™ Bluetooth® stack, profile, or iAP protocol included in the Software. . | Third Party Requirements. Licensee acknowledges that it is Licensee’s responsibility to comply with any third party license terms or requirements applicable to the use of such third party software, specifications, systems, or tools, including but not limited to SEGGER Microcontroller GmbH &amp; Co. KG’s rights in the emWin software and certain libraries included herein. Microchip is not responsible and will not be held responsible in any manner for Licensee’s failure to comply with such applicable terms or requirements. . | Open Source Components. Notwithstanding the license grants contained herein, Licensee acknowledges that certain components of the Software may be covered by so-called “open source” software licenses (“Open Source Components”). Open Source Components means any software licenses approved as open source licenses by the Open Source Initiative or any substantially similar licenses, including any license that, as a condition of distribution, requires Microchip to provide Licensee with certain notices and/or information related to such Open Source Components, or requires that the distributor make the software available in source code format. Microchip will use commercially reasonable efforts to identify such Open Source Components in a text file or “About Box” or in a file or files referenced thereby (and will include any associated license agreement, notices, and other related information therein), or the Open Source Components will contain or be accompanied by its own license agreement. To the extent required by the licenses covering Open Source Components, the terms of such licenses will apply in lieu of the terms of this Agreement, and Microchip hereby represents and warrants that the licenses granted to such Open Source Components will be no less broad than the license granted in Section 1(b). To the extent the terms of the licenses applicable to Open Source Components prohibit any of the restrictions in this Agreement with respect to such Open Source Components, such restrictions will not apply to such Open Source Components. . | Licensee’s Obligations. . (a) Licensee will ensure Third Party compliance with the terms of this Agreement. . (b) Licensee will not: (i) engage in unauthorized use, modification, disclosure or distribution of Software or Documentation, or its derivatives; (ii) use all or any portion of the Software, Documentation, or its derivatives except in conjunction with Microchip Products; or (iii) reverse engineer (by disassembly, decompilation or otherwise) Software or any portion thereof; or (iv) copy or reproduce all or any portion of Software, except as specifically allowed by this Agreement or expressly permitted by applicable law notwithstanding the foregoing limitations. . (c) Licensee must include Microchip’s copyright, trademark and other proprietary notices in all copies of the Software, Documentation, and its derivatives. Licensee may not remove or alter any Microchip copyright or other proprietary rights notice posted in any portion of the Software or Documentation. . (d) Licensee will defend, indemnify and hold Microchip and its subsidiaries harmless from and against any and all claims, costs, damages, expenses (including reasonable attorney’s fees), liabilities, and losses, including without limitation product liability claims, directly or indirectly arising from or related to: (i) the use, modification, disclosure or distribution of the Software, Documentation or any intellectual property rights related thereto; (ii) the use, sale, and distribution of Licensee Products or Third Party Products, and (iii) breach of this Agreement. THE FOREGOING STATES THE SOLE AND EXCLUSIVE LIABILITY OF THE PARTIES FOR INTELLECTUAL PROPERTY RIGHTS INFRINGEMENT. . | Confidentiality. . (a) Licensee agrees that the Software (including but not limited to the Source Code, Object Code and library files) and its derivatives, Documentation and underlying inventions, algorithms, know-how and ideas relating to the Software and the Documentation are proprietary information belonging to Microchip and its licensors (“Proprietary Information”). Except as expressly and unambiguously allowed herein, Licensee will hold in confidence and not use or disclose any Proprietary Information and shall similarly bind its employees and Third Party(ies) in writing. Proprietary Information shall not include information that: (i) is in or enters the public domain without breach of this Agreement and through no fault of the receiving party; (ii) the receiving party was legally in possession of prior to receiving it; (iii) the receiving party can demonstrate was developed by it independently and without use of or reference to the disclosing party’s Proprietary Information; or (iv) the receiving party receives from a third party without restriction on disclosure. If Licensee is required to disclose Proprietary Information by law, court order, or government agency, such disclosure shall not be deemed a breach of this Agreement provided that Licensee gives Microchip prompt notice of such requirement in order to allow Microchip to object or limit such disclosure, Licensee cooperates with Microchip to protect Proprietary Information, and Licensee complies with any protective order in place and discloses only the information required by process of law. . (b) Licensee agrees that the provisions of this Agreement regarding unauthorized use and nondisclosure of the Software, Documentation and related Proprietary Rights are necessary to protect the legitimate business interests of Microchip and its licensors and that monetary damages alone cannot adequately compensate Microchip or its licensors if such provisions are violated. Licensee, therefore, agrees that if Microchip alleges that Licensee or Third Party has breached or violated such provision then Microchip will have the right to petition for injunctive relief, without the requirement for the posting of a bond, in addition to all other remedies at law or in equity. . | Ownership of Proprietary Rights. . (a) Microchip and its licensors retain all right, title and interest in and to the Software and Documentation (“Proprietary Rights”) including, but not limited to: (i) patent, copyright, trade secret and other intellectual property rights in the Software, Documentation, and underlying technology; (ii) the Software as implemented in any device or system, all hardware and software implementations of the Software technology (expressly excluding Licensee and Third Party code developed and used in conformance with this Agreement solely to interface with the Software and Licensee Products and/or Third Party Products); and (iii) all modifications and derivative works thereof (by whomever produced). Further, modifications and derivative works shall be considered works made for hire with ownership vesting in Microchip on creation. To the extent such modifications and derivatives do not qualify as a “work for hire,” Licensee hereby irrevocably transfers, assigns and conveys the exclusive copyright thereof to Microchip, free and clear of any and all liens, claims or other encumbrances, to the fullest extent permitted by law. Licensee and Third Party use of such modifications and derivatives is limited to the license rights described in Section 1 above. . (b) Licensee shall have no right to sell, assign or otherwise transfer all or any portion of the Software, Documentation or any related intellectual property rights except as expressly set forth in this Agreement. . | Termination of Agreement. Without prejudice to any other rights, this Agreement terminates immediately, without notice by Microchip, upon a failure by License or Third Party to comply with any provision of this Agreement. Further, Microchip may also terminate this Agreement upon reasonable belief that Licensee or Third Party have failed to comply with this Agreement. Upon termination, Licensee and Third Party will immediately stop using the Software, Documentation, and derivatives thereof, and immediately destroy all such copies, remove Software from any of Licensee’s tangible media and from systems on which the Software exists, and stop using, disclosing, copying, or reproducing Software (even as may be permitted by this Agreement). Termination of this Agreement will not affect the right of any end user or consumer to use Licensee Products or Third Party Products provided that such products were purchased prior to the termination of this Agreement. . | Dangerous Applications. The Software is not fault-tolerant and is not designed, manufactured, or intended for use in hazardous environments requiring failsafe performance (“Dangerous Applications”). Dangerous Applications include the operation of nuclear facilities, aircraft navigation, aircraft communication systems, air traffic control, direct life support machines, weapons systems, or any environment or system in which the failure of the Software could lead directly or indirectly to death, personal injury, or severe physical or environmental damage. Microchip specifically disclaims (a) any express or implied warranty of fitness for use of the Software in Dangerous Applications; and (b) any and all liability for loss, damages and claims resulting from the use of the Software in Dangerous Applications. . | Warranties and Disclaimers. THE SOFTWARE AND DOCUMENTATION ARE PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE. MICROCHIP AND ITS LICENSORS ASSUME NO RESPONSIBILITY FOR THE ACCURACY, RELIABILITY OR APPLICATION OF THE SOFTWARE OR DOCUMENTATION. MICROCHIP AND ITS LICENSORS DO NOT WARRANT THAT THE SOFTWARE WILL MEET REQUIREMENTS OF LICENSEE OR THIRD PARTY, BE UNINTERRUPTED OR ERROR-FREE. MICROCHIP AND ITS LICENSORS HAVE NO OBLIGATION TO CORRECT ANY DEFECTS IN THE SOFTWARE. LICENSEE AND THIRD PARTY ASSUME THE ENTIRE RISK ARISING OUT OF USE OR PERFORMANCE OF THE SOFTWARE AND DOCUMENTATION PROVIDED UNDER THIS AGREEMENT. . | Limited Liability. IN NO EVENT SHALL MICROCHIP OR ITS LICENSORS BE LIABLE OR OBLIGATED UNDER CONTRACT, NEGLIGENCE, STRICT LIABILITY, CONTRIBUTION, BREACH OF WARRANTY, OR OTHER LEGAL OR EQUITABLE THEORY FOR ANY DIRECT OR INDIRECT DAMAGES OR EXPENSES INCLUDING BUT NOT LIMITED TO INCIDENTAL, SPECIAL, INDIRECT, PUNITIVE OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY, SERVICES, OR ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT LIMITED TO ANY DEFENSE THEREOF), OR OTHER SIMILAR COSTS. The aggregate and cumulative liability of Microchip and its licensors for damages hereunder will in no event exceed $1000 or the amount Licensee paid Microchip for the Software and Documentation, whichever is greater. Licensee acknowledges that the foregoing limitations are reasonable and an essential part of this Agreement. . | General. . (a) Governing Law, Venue and Waiver of Trial by Jury. THIS AGREEMENT SHALL BE GOVERNED BY AND CONSTRUED UNDER THE LAWS OF THE STATE OF ARIZONA AND THE UNITED STATES WITHOUT REGARD TO CONFLICTS OF LAWS PROVISIONS. Licensee agrees that any disputes arising out of or related to this Agreement, Software or Documentation shall be brought in the courts of State of Arizona. The parties agree to waive their rights to a jury trial in actions relating to this Agreement. . (b) Attorneys’ Fees. If either Microchip or Licensee employs attorneys to enforce any rights arising out of or relating to this Agreement, the prevailing party shall be entitled to recover its reasonable attorneys’ fees, costs and other expenses. . (c) Entire Agreement. This Agreement shall constitute the entire agreement between the parties with respect to the subject matter hereof. It shall not be modified except by a written agreement signed by an authorized representative of Microchip. . (d) Severability. If any provision of this Agreement shall be held by a court of competent jurisdiction to be illegal, invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect and enforceable. . (e) Waiver. No waiver of any breach of any provision of this Agreement shall constitute a waiver of any prior, concurrent or subsequent breach of the same or any other provisions hereof, and no waiver shall be effective unless made in writing and signed by an authorized representative of the waiving party. . (f) Export Regulation. Licensee agrees to comply with all export laws and restrictions and regulations of the Department of Commerce or other United States or foreign agency or authority. . (g) Survival. The indemnities, obligations of confidentiality, and limitations on liability described herein, and any right of action for breach of this Agreement prior to termination shall survive any termination of this Agreement. . (h) Assignment. Neither this Agreement nor any rights, licenses or obligations hereunder, may be assigned by Licensee without the prior written approval of Microchip except pursuant to a merger, sale of all assets of Licensee or other corporate reorganization, provided that assignee agrees in writing to be bound by the Agreement. . (i) Restricted Rights. Use, duplication or disclosure by the United States Government is subject to restrictions set forth in subparagraphs (a) through (d) of the Commercial Computer-Restricted Rights clause of FAR 52.227-19 when applicable, or in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 252.227-7013, and in similar clauses in the NASA FAR Supplement. Contractor/manufacturer is Microchip Technology Inc., 2355 W. Chandler Blvd., Chandler, AZ 85225-6199. . | If Licensee has any questions about this Agreement, please write to Microchip Technology Inc., 2355 W. Chandler Blvd., Chandler, AZ 85224-6199 USA, ATTN: Marketing. . Microchip MPLAB Harmony Integrated Software Framework. Copyright © 2015 Microchip Technology Inc. All rights reserved. . License Rev. 11/2015 . Copyright © 2015 Qualcomm Atheros, Inc. All Rights Reserved. . Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. . THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/mplab_harmony_license.html",
    "relUrl": "/mplab_harmony_license.html"
  }
  ,"10": {
    "title": "",
    "content": ". Microchip MPLAB® Harmony 3 Release Notes . Harmony 3 core library application examples for PIC32CM MC00 family v3.8.0 . New Features . Development kit and demo application support - The following table provides number of peripheral library application available for different development kits . Development Kits Number of applications . SAM D21 Xplained Pro Evaluation Kit | 8 | . | . Known Issues . The current known issues are as follows: . | . Development Tools . MPLAB® X IDE v5.40 | MPLAB® XC32 C/C++ Compiler v2.40 | IAR Embedded Workbench® for ARM® (v8.32 or above) | MPLAB® X IDE plug-ins: MPLAB® Harmony Configurator (MHC) v3.3.0.0 and above. | . | .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/release_notes.html",
    "relUrl": "/release_notes.html"
  }
  ,"11": {
    "title": "Harmony 3 core library application examples for PIC32CM MC00 family",
    "content": ". Harmony 3 core library application examples for PIC32CM MC00 family . MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC® microcontroller and microprocessor devices. Refer to the following links for more information. . Microchip 32-bit MCUs | Microchip 32-bit MPUs | Microchip MPLAB X IDE | Microchip MPLAB® Harmony | Microchip MPLAB® Harmony Pages | . This repository contains the MPLAB® Harmony 3 core library application examples for PIC32CM MC00 family . Release Notes | MPLAB® Harmony License | . To clone or download these applications from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. . Contents Summary . Folder Description . apps | Peripheral library example applications | . docs | Applications help documentation | . Code Examples . The following applications are provided to demonstrate the typical or interesting usage models of one or more peripheral libraries. . Name Description . I2C driver asynchronous - I2C EEPROM | This example application shows how to use the I2C driver in asynchronous mode to perform operations on the EEPROM | . SPI Driver asynchronous - multi client | This example demonstrates how to use single instance of the SPI driver in asynchronous mode to communicate with multiple EEPROMs | . USART driver asynchronous - UART echo | This example echoes the received characters over the console using the USART driver in asynchronous mode | . USART driver synchronous - UART echo | This example echoes the received characters over the console using the USART driver in synchronous mode | . FAT filesystem using NVM driver | This application shows an example of implementing a FAT disk in the device internal Flash memory | . FAT filesystem using SD-SPI driver | This application shows an example of using the MPLAB Harmony File System to access and modify the contents of a SD card using the SDSPI driver and the SPI PLIB | . FreeRTOS basic | This example application blinks an LED to show the FreeRTOS threads that are running and to indicate status | . Console Debug System Service using UART | This example application demonstrates the UART based console and debug system service | . Time System Service multi-client | This example application demonstrates the multi-client system timer functionality | .   |   | . . . . . .",
    "url": "http://localhost:4000/core_apps_pic32cm_mc00/",
    "relUrl": "/"
  }
  
}`;
var data_for_search

var localhost_path_with_repo = "http://localhost:4000/core_apps_pic32cm_mc00";
var home_index_string = "Harmony 3 core library application examples for PIC32CM MC00 family";
var doc_root_folder = "docs";

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  const mainNav = document.querySelector('.js-main-nav');
  const pageHeader = document.querySelector('.js-page-header');
  const navTrigger = document.querySelector('.js-main-nav-trigger');

  jtd.addEvent(navTrigger, 'click', function(e){
    e.preventDefault();
    var text = navTrigger.innerText;
    var textToggle = navTrigger.getAttribute('data-text-toggle');

    mainNav.classList.toggle('nav-open');
    pageHeader.classList.toggle('nav-open');
    navTrigger.classList.toggle('nav-open');
    navTrigger.innerText = textToggle;
    navTrigger.setAttribute('data-text-toggle', text);
    textToggle = text;
  })
}

// Site search

function initSearch() {

     data_for_search = JSON.parse(myVariable);
     lunr.tokenizer.separator = /[\s/]+/

    var index = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 200 });
        this.field('content', { boost: 2 });
        this.field('url');
        this.metadataWhitelist = ['position']

        var location = document.location.pathname;
        var path = location.substring(0, location.lastIndexOf("/"));
        var directoryName = path.substring(path.lastIndexOf("/")+1);

        var cur_path_from_root = path.substring(path.lastIndexOf(doc_root_folder + "/"));
        var cur_depth = (cur_path_from_root.split("/").length - 1);

        var rel_path_to_root = "";

        if (directoryName == doc_root_folder) {
            rel_path_to_root = "./"
            cur_depth = 0
        }

        if (cur_depth != 0) {
            for (var i = 0; i < cur_depth; i++)
            {
                rel_path_to_root = rel_path_to_root + "../"
            }
        }

        for (var i in data_for_search) {

            data_for_search[i].url = data_for_search[i].url.replace(localhost_path_with_repo, rel_path_to_root);

            if (data_for_search[i].title == home_index_string)
            {
                data_for_search[i].url = data_for_search[i].url + "index.html"
            }

            this.add({
                id: i,
                title: data_for_search[i].title,
                content: data_for_search[i].content,
                url: data_for_search[i].url
            });
        }
    });

    searchResults(index, data_for_search);

function searchResults(index, data) {
    var index = index;
    var docs = data;
    var searchInput = document.querySelector('.js-search-input');
    var searchResults = document.querySelector('.js-search-results');

    function hideResults() {
      searchResults.innerHTML = '';
      searchResults.classList.remove('active');
    }

    jtd.addEvent(searchInput, 'keydown', function(e){
      switch (e.keyCode) {
        case 38: // arrow up
          e.preventDefault();
          var active = document.querySelector('.search-result.active');
          if (active) {
            active.classList.remove('active');
            if (active.parentElement.previousSibling) {
              var previous = active.parentElement.previousSibling.querySelector('.search-result');
              previous.classList.add('active');
            }
          }
          return;
        case 40: // arrow down
          e.preventDefault();
          var active = document.querySelector('.search-result.active');
          if (active) {
            if (active.parentElement.nextSibling) {
              var next = active.parentElement.nextSibling.querySelector('.search-result');
              active.classList.remove('active');
              next.classList.add('active');
            }
          } else {
            var next = document.querySelector('.search-result');
            if (next) {
              next.classList.add('active');
            }
          }
          return;
        case 13: // enter
          e.preventDefault();
          var active = document.querySelector('.search-result.active');
          if (active) {
            active.click();
          } else {
            var first = document.querySelector('.search-result');
            if (first) {
              first.click();
            }
          }
          return;
      }
    });

    jtd.addEvent(searchInput, 'keyup', function(e){
      switch (e.keyCode) {
        case 27: // When esc key is pressed, hide the results and clear the field
          hideResults();
          searchInput.value = '';
          return;
        case 38: // arrow up
        case 40: // arrow down
        case 13: // enter
          e.preventDefault();
          return;
      }

      hideResults();

      var input = this.value;
      if (input === '') {
        return;
      }

      var results = index.query(function (query) {
        var tokens = lunr.tokenizer(input)
        query.term(tokens, {
          boost: 10
        });
        query.term(tokens, {
          wildcard: lunr.Query.wildcard.TRAILING
        });
      });

      if (results.length > 0) {
        searchResults.classList.add('active');
        var resultsList = document.createElement('ul');
        resultsList.classList.add('search-results-list');
        searchResults.appendChild(resultsList);

        for (var i in results) {
          var result = results[i];
          var doc = docs[result.ref];

          var resultsListItem = document.createElement('li');
          resultsListItem.classList.add('search-results-list-item');
          resultsList.appendChild(resultsListItem);

          var resultLink = document.createElement('a');
          resultLink.classList.add('search-result');
          resultLink.setAttribute('href', doc.url);
          resultsListItem.appendChild(resultLink);

          var resultTitle = document.createElement('div');
          resultTitle.classList.add('search-result-title');
          resultTitle.innerText = doc.title;
          resultLink.appendChild(resultTitle);

          var resultRelUrl = document.createElement('span');
          resultRelUrl.classList.add('search-result-rel-url');
          resultRelUrl.innerText = doc.relUrl;
          resultTitle.appendChild(resultRelUrl);

          var metadata = result.matchData.metadata;
          var contentFound = false;
          for (var j in metadata) {
            if (metadata[j].title) {
              var position = metadata[j].title.position[0];
              var start = position[0];
              var end = position[0] + position[1];
              resultTitle.innerHTML = doc.title.substring(0, start) + '<span class="search-result-highlight">' + doc.title.substring(start, end) + '</span>' + doc.title.substring(end, doc.title.length)+'<span class="search-result-rel-url">'+doc.relUrl+'</span>';

            } else if (metadata[j].content && !contentFound) {
              contentFound = true;

              var position = metadata[j].content.position[0];
              var start = position[0];
              var end = position[0] + position[1];
              var previewStart = start;
              var previewEnd = end;
              var ellipsesBefore = true;
              var ellipsesAfter = true;
              for (var k = 0; k < 3; k++) {
                var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
                var nextDot = doc.content.lastIndexOf('.', previewStart - 2);
                if ((nextDot > 0) && (nextDot > nextSpace)) {
                  previewStart = nextDot + 1;
                  ellipsesBefore = false;
                  break;
                }
                if (nextSpace < 0) {
                  previewStart = 0;
                  ellipsesBefore = false;
                  break;
                }
                previewStart = nextSpace + 1;
              }
              for (var k = 0; k < 10; k++) {
                var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
                var nextDot = doc.content.indexOf('.', previewEnd + 1);
                if ((nextDot > 0) && (nextDot < nextSpace)) {
                  previewEnd = nextDot;
                  ellipsesAfter = false;
                  break;
                }
                if (nextSpace < 0) {
                  previewEnd = doc.content.length;
                  ellipsesAfter = false;
                  break;
                }
                previewEnd = nextSpace;
              }
              var preview = doc.content.substring(previewStart, start);
              if (ellipsesBefore) {
                preview = '... ' + preview;
              }
              preview += '<span class="search-result-highlight">' + doc.content.substring(start, end) + '</span>';
              preview += doc.content.substring(end, previewEnd);
              if (ellipsesAfter) {
                preview += ' ...';
              }

              var resultPreview = document.createElement('div');
              resultPreview.classList.add('search-result-preview');
              resultPreview.innerHTML = preview;
              resultLink.appendChild(resultPreview);
            }
          }
        }
      }
    });

    jtd.addEvent(searchInput, 'blur', function(){
      setTimeout(function(){ hideResults() }, 300);
    });
  }
}

function pageFocus() {
  var mainContent = document.querySelector('.js-main-content');
  mainContent.focus();
}

// Document ready

jtd.onReady(function(){
  initNav();
  pageFocus();
  if (typeof lunr !== 'undefined') {
    initSearch();
  }
});

})(window.jtd = window.jtd || {});


