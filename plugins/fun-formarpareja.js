const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, 𝐃𝐄𝐁𝐄𝐑𝐈𝐀𝐒 𝐂𝐀𝐒𝐀𝐑𝐓𝐄 𝐘 𝐂𝐎𝐆𝐄𝐑 𝐂𝐎𝐍 ${toM(b)}, 𝐒𝐄 𝐓𝐑𝐀𝐄𝐍 𝐆𝐀𝐍𝐀𝐒 💓*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
