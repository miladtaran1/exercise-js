// معدل کاربر را دریافت کرده و سپس سطح او را تعیین کنید

// A برای معدل 18 الی 20 سطح
// B برای معدل 15 الی 17 سطح
// C برای معدل 12 الی 14 سطح
// معدل کمتر از 12 مشروط میشه :(

let personScore = Number(prompt("pleas enter your Score"));

switch (personScore) {
    case 20: alert("sath shoma A ast");
        break;
    case 19: alert("sath shoma A ast");
        break;
    case 18: alert("sath shoma A ast");
        break;
    case 17: alert("sath shoma B ast");
        break;
    case 16: alert("sath shoma B ast");
        break;
    case 15: alert("sath shoma B ast");
        break;
    case 14: alert("sath shoma c ast");
        break;
    case 13: alert("sath shoma c ast");
    break;
    case 12: alert("sath shoma c ast");
        break;
    default: alert("shoma mardod shodid");
        break;
};
