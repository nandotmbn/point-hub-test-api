export const htmlAcceptInvitation = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank you</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        color: rgb(96, 96, 96);
      }
      .bg-gray-400 {
        background-color: rgb(239, 239, 239);
      }
      .container-head {
        padding: 8px;
        width: 467px;
        margin: auto;
        background-color: white;
        border-radius: 20px;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      .container-body {
        padding: 8px;
        width: 467px;
        margin: auto;
        background-color: white;
        border-radius: 20px;
      }
      .container-footer {
        padding: 8px;
        width: 467px;
        margin: auto;
        border-radius: 20px;
      }
      h3 {
        font-weight: normal;
      }
      p {
        text-align: justify;
      }
      .container-footer p {
        text-align: center;
        font-size: 0.7em;
      }
    </style>
  </head>
  <body class="bg-gray-400">
    <div class="container-head">
      <h1>Point Hub</h1>
      <h3>Thank you for your confirmation</h3>
    </div>
    <div class="container-body">
      <p>Hello {{username}}</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur consectetur cupiditate. Magni molestias
        aliquid maiores natus amet ex enim itaque eveniet voluptate similique adipisci fugiat, quis eius voluptatibus,
        quibusdam suscipit blanditiis. Quidem dolorem sed veniam sunt! Non, corrupti harum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum distinctio fugit praesentium
        consequuntur tempore minus officiis eligendi quibusdam numquam.
      </p>
    </div>
    <br><br>
    <div class="container-footer">
      <p>Privacy Policy | Unsubscribe</p>
      <br />
      <p>Copyright @2023 PointHub</p>
    </div>
  </body>
</html>
`;
