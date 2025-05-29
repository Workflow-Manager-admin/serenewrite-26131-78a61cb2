#!/bin/bash
cd /home/kavia/workspace/code-generation/serenewrite-26131-78a61cb2/serenewrite
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

