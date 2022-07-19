npm install
npm run dev &
sleep 15
last_pid=$!
npx ts-node scripts/generate-table.ts
kill $last_pid