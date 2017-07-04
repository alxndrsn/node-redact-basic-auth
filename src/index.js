module.exports = url => url && url.replace(/(http[s]?:\/\/[^:]*):[^@]*@/g, '$1:****@');
