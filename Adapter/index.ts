class USB {
    request() {
        console.log('USB')
    }
}


class Adapter extends USB {
    private typeC: TypeC = new TypeC()
    request() {
        this.typeC.specificRequest()
    }
}

class TypeC {
    specificRequest() {
        console.log('TypeC')
    }
}

const usb: USB = new Adapter()
usb.request()