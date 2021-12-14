async function getRawFiles(paths: string[]) {
  return Promise.all(
    paths.map((path) => import(/* @vite-ignore */ `../${path}?raw`))
  ).then((res) => {
    return res.map((r) => r.default);
  });
}

export async function getFiles(source: any, path: any) {
  const filePaths = String(source)
    .match(/"(.*?)"/g)!
    .map((file: any) => file.replace(/"/g, "").replace(/\.\//g, ""));
  const rawFiles = await getRawFiles(filePaths.map((f) => `./${path}/${f}`));
  return Object.fromEntries(
    filePaths.map((file: any, i) => [file, rawFiles[i]])
  );
}
