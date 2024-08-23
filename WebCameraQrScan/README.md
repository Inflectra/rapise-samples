# WebCameraQrScan

This sample demonstrates how to use a video file to stream web camera data to an application.

- `App` folder contains the application to test. It is a modified clone of [instascan](https://github.com/schmich/instascan) live demo. 
  - Run `npm install` to install required Node modules.
  - Run `npm run dev` to start the application.
  - The application is accessible at http://127.0.0.1:8000
- Open `Framework.sstest` and run `ScanQR` test. It will launch the application, the QR code from the qr.mjpeg video file will be scanned and then checked by the test.
  