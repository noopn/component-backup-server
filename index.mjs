import schedule from "node-schedule";
import { promisify } from "node:util";
import stream from "node:stream";
import fs from "node:fs";
import got from "got";
import dayjs from "dayjs";

const BASE = ([p]) => "http://enginee-3.demo.devcloud.supos.net" + p;

const fn = async () => {
  if (!(await promisify(fs.exists)("-v"))) await promisify(fs.mkdir)("-v");

  const pipeline = promisify(stream.pipeline);
  const name = dayjs().format("YYYY-MM-DD") + ".zip";
  await pipeline(
    got.stream(
      BASE`/api/app/manager/export/download?appId=App_264610095947b7fa572df452f1c87c11`
    ),
    fs.createWriteStream(`./-v/${name}`)
  );
};
fn();
// try {
//   schedule.scheduleJob("0 * * * * *", fn);
// } catch (err) {
//   promisify(fs.writeFile)("./err.log", "utf-8");
// }
