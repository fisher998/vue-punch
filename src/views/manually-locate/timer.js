export function dateTimeTOString (dateTime) {
    var source = new Date(dateTime);
    // var yy = source.getFullYear().toString();
    // var mm = source.getMonth() + 1;
    // mm = mm < 10 ? ('0' + mm.toString()) : mm.toString();
    // var dd = source.getDate();
    // dd = dd < 10 ? ('0' + dd.toString()) : dd.toString();
    var hh = source.getHours();
    hh = hh < 10 ? ('0' + hh.toString()) : hh.toString();
    var MM = source.getMinutes();
    MM = MM < 10 ? ('0' + MM.toString()) : MM.toString();
    var ss = source.getSeconds();
    ss = ss < 10 ? ('0' + ss.toString()) : ss.toString();
    // var aa = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss;
    var aa = hh + ':' + MM + ':' + ss;
    return aa;
}
