rm -rf build

npm run build
mv build react-build

mkdir build

mv ./react-build ./build/react-build
cp -v *.* ./build