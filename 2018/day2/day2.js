function inventoryMgmt(str) {
    let input = str.split('\n');
    let twiceCounter = 0;
    let thriceCounter = 0;
    for(let boxId of input) {
        let counter = {};
        let twice = false;
        let thrice = false;
        for(let letter of boxId) {
            if(!counter[letter]) {
                counter[letter] = 1;
            } else {
                counter[letter]++;
            }
        }
        for(let letter in counter) {
            if(counter[letter] === 2) {
                twice = true;
            }
            if(counter[letter] === 3) {
                thrice = true;
            }
        }
        if(twice) {
            twiceCounter++;
        }
        if(thrice) {
            thriceCounter++;
        }
        // console.log(counter);
    }
    console.log(twiceCounter * thriceCounter);
    return twiceCounter * thriceCounter;
}

// Input
// inventoryMgmt(`abcdef
// bababc
// abbcde
// abcccd
// aabcdd
// abcdee
// ababab`); // 12

inventoryMgmt(`rmyxgdlihczskunpfwbgqoeybv
rmyxgdlksczskunpfwbjqkeatv
rmybgdxibczskunpfwbjqoeatv
rmyxgdlirczskuopfwbjqzeatv
rmyxedlrhczskunpfwbyqoeatv
rmyxfdlicczskunpfwbxqoeatv
rmyxgvlihkzskunpfwbsqoeatv
rmyxgdaihczvkunpfwblqoeatv
nmyxgolihczskunpfwbjqieatv
rhyxgdcihczskunifwbjqoeatv
rmfxgdlihczskunpfwbvqgeatv
smyxgdlihczskunsiwbjqoeatv
rmyxgdcihcxskunpfwbrqoeatv
rmyxgdlihczckuiqfwbjqoeatv
rmyxxdwihczskunifwbjqoeatv
rkzxgdlihczskunpfwhjqoeatv
rmypgdlihczskunpfwbrqoeafv
rmyxgplihczvkunpkwbjqoeatv
rqyxgdlihdzskjnpfwbjqoeatv
rmyxgdlihczskqnpswbjqoeaov
mcyxgdlihczmkunpfwbjqoeatv
rmyxgdlohczspunpowbjqoeatv
tmyxgdlihczskunpfwbeqoeltv
rmyxgdlibccskunpfwbjqoegtv
rmyxgdlehczsaunpfwboqoeatv
rmaxgdlihczseunpfwbjqojatv
rmyxgdlijczskynpfwbjboeatv
kmlxgdlilczskunpfwbjqoeatv
rmsxgdlshczskenpfwbjqoeatv
rmbxgdlihcmskgnpfwbjqoeatv
rayxgdlihczskunpfwbjqoeaef
umyxgdlisczskunpfdbjqoeatv
rmyxgdlihczskunsfwbjqieatg
rmbxgdlihczhkunpfwbjqoeamv
rmyxgdlihczskeypfwbjqxeatv
rmyxgkrihczskunptwbjqoeatv
rmyxgdlihczskunpawbjqoexiv
rmyxgdlihcrskqnpfwbjqceatv
rmyxgblihczskjnpfwbjqieatv
rmyggdlidczskunofwbjqoeatv
rmyxgdlghczskunphwbjqomatv
rmqxgdbihczskunpfnbjqoeatv
rvyxgdlihczsgunpfwbjqoeanv
royxgdlnhczskqnpfwbjqoeatv
rmyxgdlihczskugpfwbkqreatv
rmyxfdlihczskunppwejqoeatv
rqyxgdlipczskunpfwbjqoeqtv
rmyxgdlicczskunpnwbjqotatv
rmyxodlihczskxnpfwijqoeatv
rmyxrdyihczskunpftbjqoeatv
rmtxgdyihwzskunpfwbjqoeatv
tmyxcdliiczskunpfwbjqoeatv
rmyxgdlihczskmnpfwbjjoeadv
rmyxgdnihczskunpqwbjqojatv
bmyxgdlihczskcnpfwboqoeatv
rmysgdlihcyskudpfwbjqoeatv
rmyxgdtihczsmuupfwbjqoeatv
rmyxgdlihczssunpffbjqolatv
rmyogdlihczsklnpfwbjqoxatv
rmyxgjlihczskunpfwsjqoyatv
rmyxgalshczskunpfwbuqoeatv
rmyfgdlihczskunqfwbiqoeatv
tmyxgdlihczskunotwbjqoeatv
rmyxpdzihczskuopfwbjqoeatv
rmyfgdlihczskunpfrbgqoeatv
rmyxgdlwhczskhnofwbjqoeatv
rmyxgdlihczsmudpfrbjqoeatv
rmyxgdlihczokanpfwbjqooatv
rmyxrdlihczskunppwjjqoeatv
rmyxgdjihczskwnpowbjqoeatv
mmyxgdlihczikunpfwbjqoeamv
rmyxgflihczshunpwwbjqoeatv
rmytghlihczskunpfwbjqoeatk
rmyxgdlipczmbunpfwbjqoeatv
rmyxgdlihczkkonpfwbjqomatv
rmfxgslihczskunpfwujqoeatv
dmyxgdlihczykunqfwbjqoeatv
rmyxgalihcbskunpgwbjqoeatv
rmyxgdlinczqkunpfwbjqopatv
rmyxgdlihwzslunplwbjqoeatv
rmypgdlihczskdtpfwbjqoeatv
rmsxgdxieczskunpfwbjqoeatv
rmyxgdlihczskwnpfxrjqoeatv
rmyxgdlihzzskunpflbjpoeatv
rslxgdlihczsnunpfwbjqoeatv
rmyxgdlmcczskunpfwbjqoealv
fmkxgdbihczskunpfwbjqoeatv
rmyxgdiigczxkunpfwbjqoeatv
rjyxgnlqhczskunpfwbjqoeatv
ymyxgolihczskunpfmbjqoeatv
hmyxgdlihczskuncfwbjqoejtv
rmyxgqlihczzkunpfwbjqojatv
rmgfgdlihczskunpfwbjgoeatv
rmyxgdlfhczskunpfwbjqweaxv
rmoxtdlihczskunpfwdjqoeatv
ruyxgdlihczskunpfmbjnoeatv
rmnxgflehczskunpfwbjqoeatv
rmyugdlihczskunpfwfjroeatv
rmyxddbihczskunpfwbjqoeutv
rmyxgdlipczskunofbbjqoeatv
gmyxgdlihczskunpfkbjroeatv
rmyxgdllhcpskunpfwbjqqeatv
rmyxgdlihchskunpfwbjqoelcv
mmyxldlihczskuncfwbjqoeatv
ryyxgdlxhczskcnpfwbjqoeatv
rmyxpdlihczskyntfwbjqoeatv
rmhxgdlibczskwnpfwbjqoeatv
rmyxgdlihczskunpfwojbkeatv
qmyxgdlihczskunpfwbjqoyatm
rmyxgdlzhczskunpfwbjqoealr
rmyegdliqczskunpfgbjqoeatv
umyxgdlihczsvunpfwbfqoeatv
rmyxgdoihfzskunpfmbjqoeatv
rmyxgdlihcdskanpmwbjqoeatv
rmyxgdyihczskunpfrbjqoeaov
rcyxgdlihczskuegfwbjqoeatv
rmyxgdlihgwskunpfwbjkoeatv
rpyxgdlihmzskunpfwbjqoeatp
rmyxgdlihhzskunpfwbjaoeapv
rmyxgdsrhczskunpflbjqoeatv
rmrxgdlihczskunpvwbjqoeabv
rmcxgylihczskunpfwbjyoeatv
rmkxgdlyhczsounpfwbjqoeatv
rmyxgdqihczskunmfwbjqoratv
rmyxgdlihczskunpfibjqofath
rmyxgdliqczskunpqwbjqoeaev
rmhxgdlizcjskunpfwbjqoeatv
rmyxgdlfhcwskunpfwbjqoeaqv
rmyxgdlchclskunpfwbdqoeatv
rmyxgdluhczswunpfwbjqoeatt
rmyxgdlzqczskunpfwbjqoeatq
rmdxgdlihszskunpfwbwqoeatv
rmyxgdlihszsvunpfwbjqueatv
rmyxgdlhhczskunpffbjaoeatv
rmrxgdlphczskunpfwbjqreatv
hmyngdxihczskunpfwbjqoeatv
rmyxgdlizczpkunpfwbyqoeatv
rmyxbdlihyzskunlfwbjqoeatv
rmyxgdlipczsqunnfwbjqoeatv
rmyxgdlihcsskunpfxbjqoaatv
rmyxgdljhcznkunpfwbjqfeatv
rmaxgdlihczspunpfwbjqoqatv
rsyxgdlihczskunpfwbjqoehcv
rmyxgjlicczskunpfwbjqoeitv
rwymgvlihczskunpfwbjqoeatv
rmyxgdlipfzskunpfwbjqweatv
rmyxgglihczskunpgwbjqoealv
royxgdlihczskhnpfwbyqoeatv
rmyxgdlihczskvnpfabkqoeatv
rmyxgdlihczskunpfwhjwzeatv
jlyxgdlihczskunpfwbjqzeatv
rmyxgdlihccskunpfwwjqopatv
rmyxgxlihczskuupfwbjqoeahv
rmyxgdcihcbskungfwbjqoeatv
tmyxgdlihczskunpfwbjmoeftv
rkyxgdlioczskmnpfwbjqoeatv
rmyxgdlrhczskulpfwbjaoeatv
rmysgdlihczikunphwbjqoeatv
rmyxgdlihczskuvpfwbjqoeyty
fmyxgdlihczscunpfqbjqoeatv
rfyxgdlihzzrkunpfwbjqoeatv
rmyxgdlikczskunpfwbjqolath
rmyxqdlihjzskunpfwbjqoeamv
rmuxodiihczskunpfwbjqoeatv
rmyygdliucuskunpfwbjqoeatv
rmyxgdliwczskuppawbjqoeatv
rmyxgdlihczskunprwbjqgehtv
imyvgdlihczskunpfwbjqouatv
rgyxgdluhczskunpflbjqoeatv
rmgxgdlihczsdunpfwwjqoeatv
gdyxgdlihczskunpfwbjqoeavv
rmyxgdlihczskunpfwljjoektv
rmexgdlihczskunpfwxjqoeytv
rmyxqdlihcyskuwpfwbjqoeatv
rmyxgdlihczskunpfiyjqcebtv
amyngdlihczskunpfwbjqseatv
rmzxgdlihczykubpfwbjqoeatv
rmyxgdlihczhkuopfwbjsoeatv
rmyxgdlihczskunpfwbaqowztv
rmgxgdlihczslunpfwbjeoeatv
rmytgdlzhczskunrfwbjqoeatv
rmyxgdtihczskunafobjqoeatv
rmyxgdlihczskuflfbbjqoeatv
rmdxgdlihczskunpfwbjqoealj
rbyxgdlihczskuppdwbjqoeatv
rmyxhdiihcwskunpfwbjqoeatv
rmmggdlfhczskunpfwbjqoeatv
rmbxgblihczskuypfwbjqoeatv
rmyxgslihczsjunpjwbjqoeatv
rmyxgdlohczsaunpfwbjboeatv
rmaxgdhihczskunpfwbjooeatv
rmyxidlihczskunpfgbuqoeatv
rmyxgdlihfzckznpfwbjqoeatv
rmaqgdpihczskunpfwbjqoeatv
rmyvgdlirczskunpfobjqoeatv
rmdxgdlihczlkunpxwbjqoeatv
rmyxgdlihczseunpfwbjvdeatv
rmyxgdlihczskuhpfwbjqneath
rmyxrdlihciskunpfwbjqoratv
rmyxgdmihczsqunpftbjqoeatv
rmyxgdlbhczskulpfbbjqoeatv
rmoxgdlihczskunpfwbjqoeesv
rmyxgdlihczskuijfwejqoeatv
rmyxgdlihczskunpfwnkqoxatv
rmyxgdvihmzskuupfwbjqoeatv
rkyxedlihczskunpfcbjqoeatv
rmyxgdjihczskunprwbjqieatv
omyxgqgihczskunpfwbjqoeatv
rmyxydlihczskunpfwkjqoentv
rmbxgdlicczskunpfwbjqteatv
emyxgdlihczskugpfwbjqneatv
dmyxgflihczskunpfwbjqjeatv
umyxgdlihczskunpfwbjloextv
rmyxgdlihczsbunpfwbyqpeatv
rmyxgdrihczsvunpcwbjqoeatv
qmyxgdlihcwsknnpfwbjqoeatv
ymyxgdlihczskunpfsbjqowatv
rmyxgdlbhczskunpnvbjqoeatv
rmyxfdlixczskunpfwbjqoertv
rmyygdlihszrkunpfwbjqoeatv
rmyxgxlihcpskunpfwbjqoeanv
rmyxgdlihczskjnpfwbjqoprtv
rmyxgdlisczfkunpfwbjqoeath
rmyxgdlihczskunpfkbjqoeaji
rmyxgylihczskunpfwbfqoeatl
rmsxgdbihczskunpfwtjqoeatv
smyxgdlihczskunpfwbjqcwatv
rmyxgdlihczskunppjljqoeatv
rmyxgdlihczskulpfdbjooeatv
rmyxgdlihczskunpfibjqcebtv
rmyxadlihczskunpgwbjyoeatv
rmyxgdlihczdkunpvwbjqoeytv
rmyxgdlihcvskunpfwbjxohatv
rmyxgplihczskunpfgbjqoeauv
rmyxgdlihcysrunmfwbjqoeatv
rmyygdlihczskunpfwbjqvewtv
rmyxgdlihczsmunpfwdjnoeatv
rmyxgdbibczskunpfwbjuoeatv
rmyfgdlihczskubpfwbjqoeatp
rmyxgdlihczskuopfzijqoeatv
rmyqgdlihczskunpwwbjqoeanv
imyxgdlihczskunpfwbjqoqytv
rmyxgdlixcoskbnpfwbjqoeatv
rmyxgrlihccskunpfwbjqteatv
rdyxgdlihcpskunpfwbjqoratv
rmyxgdlihkzskunpfwbjmoeatj
rmyxgslihczskcnpfjbjqoeatv
rmyxgdlihczsqunqfwdjqoeatv
rjyxgdlyhczbkunpfwbjqoeatv
rmyxudlihczjkunpfwbjqzeatv`);