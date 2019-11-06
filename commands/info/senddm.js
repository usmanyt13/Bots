module.exports = {
    name:'senddm',
    run: (client,message,args) => {
        let arg1 = args[0]
    let arg2 = args[1]
    let user = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    let msg = args.slice(1).join(' ');
    user.send(msg)
    return;
    }
}



