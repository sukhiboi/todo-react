npm run build
mv build react-build

mkdir $1

mv ./react-build $1/react-build
cp -v backend/*.* $1