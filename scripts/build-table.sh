npm run dev &
sleep 5
last_pid=$!
npx ts-node scripts/generate-table.ts
kill $last_pid