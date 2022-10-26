export default function (context) {

    //console.log(typeof context.store.getters.isEmployee)
    if(context.store.getters.isEmployee == 'true'){ 
        console.log('redirect to user')
        context.redirect("/user/dashboard3")
    }else{
        console.log('redirect')
        context.redirect("/user/dashboard3")
    }
}