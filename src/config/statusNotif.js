import { toast } from "react-toastify";

export const failed = (mess, duration = 500) => {
    toast.error(mess, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: duration,
    });
}
export const success = (mess, duration = 500) => {
    toast.success(mess, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: duration,
    });
}