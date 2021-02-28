#!/bin/bash

if [ -z "$1" ]; then
	echo "Root package is undefined!"
	exit 1
fi

if [ -z "$2" ]; then
	echo "Package is undefined!"
	exit 1
fi

rootPath=$1
packagePath=$2

cd "${packagePath}" || exit

echo "🚀️ Set up gulp"

# gulpfile 복사
echo "⚙️ Copy gulpfile"

cp "${rootPath}/gulpfile.js" "${packagePath}"

echo "✅ Finish"

echo "🎉 Finish to set up gulp"
