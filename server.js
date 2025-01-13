const { spawn } = require('child_process');

const server = spawn('java', ['-jar', 'build/libs/backend-all.jar'], { stdio: 'inherit' });

server.on('close', (code) => {
  console.log(`Ktor server exited with code ${code}`);
});
