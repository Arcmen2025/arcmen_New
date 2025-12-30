import { NextResponse } from 'next/server';

const protectedPaths = ['/admin-panel'];

export function proxy(request) {
    const userToken = request.cookies.get('token')?.value;
    const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));

    if (isProtectedPath && !userToken) {
        // Custom HTML page for access denied
        const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="refresh" content="5;url=/" />
        <title>Access Denied</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
          }
          .message {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="message">
          <h1>Access Denied</h1>
          <p>Please login, you can't access this page.</p>
          <p>Redirecting to the home page in <span id="timer">5</span> seconds...</p>
        </div>
        <script>
          let timeLeft = 5;
          const timer = document.getElementById('timer');
          const interval = setInterval(() => {
            timeLeft--;
            timer.textContent = timeLeft;
            if (timeLeft <= 0) clearInterval(interval);
          }, 1000);
        </script>
      </body>
      </html>
    `;

        return new NextResponse(htmlResponse, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        });
    }

    return NextResponse.next();
}
