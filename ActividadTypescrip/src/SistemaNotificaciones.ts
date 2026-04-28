type Email = {
    tipo: "email",
    emailDestino: string;
    asunto: string;
    descripcion: string;
}
type Sms = {
    tipo: "sms",
    numDestino: number;
    mensaje: string;
}

type Push = {
    tipo: "push",
    psoition: string;
}

type notificacion = Email | Sms | Push;

function enviarNotificacion(notifi:notificacion) {
    try {
        if (notifi.tipo === "email") {
        console.log("se envio correctamente el email")
        }else if (notifi.tipo === "sms") {
        console.log("se envio un sms")
        }else{
        console.log("Aparecio la ventana emergente")
        }
    } catch (error) {
        console.log("Ha ocurrido un error al enviar la notificacion")
    }
    
}