function Main(input) {
  const inputs = input.split(' ');
  const H = Number(inputs[0]);
  const W = Number(inputs[1]);
  const N = Number(inputs[2]);
  const arr = Array(H).fill('.').map(() => Array(W).fill('.'));
  let x = 0;
  let y = 0;
  let face = 0;
  const faces = [
    {
      x: -1,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 0,
    },
    {
      x: 0,
      y: -1,
    },
  ];

  for (let i = 0; i < N; i++) {
    if (arr[x][y] === '.') {
      arr[x][y] = '#';
      face = (((face + 1) % 4) + 4) % 4;
    } else {
      arr[x][y] = '.';
      face = (((face - 1) % 4) + 4) % 4;
    }

    x = (((x + faces[face].x) % H) + H) % H;
    y = (((y + faces[face].y) % W) + W) % W;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(''));
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));