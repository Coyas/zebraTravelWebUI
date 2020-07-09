import fetch from "isomorphic-unfetch";

// const Utils = use('App/Services/Utils'); //para adonis
// const ok = Utils.googleRecaptcha(request, session);
//     if (!ok) response.redirect('back');

export async function googleRecaptcha(dados) {
    // validar google recaptcha
    // console.log('G_recaptcha: ')
    // console.log(request.input('g-recaptcha-response'))

    // const google = await post({
    //   method: 'post',
    //   url: 'https://www.google.com/recaptcha/api/siteverify',
    //   params: {
    // secret: Env.get('G_secretu'),
    // response: request.input('g-recaptcha-response'),
    //   },
    // });
    console.log(process.env.SecretKey);
    const url = `https://www.google.com/recaptcha/api/siteverify`;
    const google = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        params: {
            secret: process.env.SecretKey,
            response: dados["g-recaptcha-response"]
        }
    });

    // console.log("api response");
    // console.log(response);
    // const dados = await response.json();

    // if (!google.data.success && google.data.score < 0.6) {
    //     return false;
    // }

    if (google.data.success && google.data.score > 0.6) {
        console.log("Login: voce é humano");
        console.log(google.data.success);
        console.log(google.data.score);
    } else {
        console.log("Login: voce nao é humano");
        console.log(google.data.success);
        console.log(google.data.score);
    }

    return true;
}
