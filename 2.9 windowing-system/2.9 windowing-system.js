export function Size(width = 80, height = 60) {
    (width < 1)? this.width = 1 : this.width = width,
    (height < 1)? this.height = 1 : this.height = height
}

Size.prototype.resize = function(width, height) {
    this.width = width
    this.height = height
}

export function Position(x = 0, y = 0) {
    (x < 0)? this.x = 0 : this.x = x,
    (y < 0)? this.y = 0 : this.y = y
}

Position.prototype.move = function(x, y) {
    this.x = x
    this.y = y
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600)
        this.size = new Size()
        this.position = new Position()
    }
    resize(Size) {
        let fixedWidth = this.screenSize.width - this.position.x
        let fixedHeight = this.screenSize.height - this.position.y

        this.size.width = (this.screenSize.width < Size.width)? fixedWidth : Size.width
        this.size.height = (this.screenSize.height < Size.height)? fixedHeight : Size.height
    }
    move(Position) {
        let x = this.size.width + Position.x
        let y = this.size.height + Position.y
        let fixedX = this.screenSize.width - this.size.width
        let fixedY = this.screenSize.height - this.size.height

        this.position.x = (this.screenSize.width < x)? fixedX : Position.x
        this.position.y = (this.screenSize.height < y)? fixedY : Position.y
    }
}

export function changeWindow(ProgramWindow) {
    ProgramWindow.size = new Size(400, 300)
    ProgramWindow.position = new Position(100, 150)
    return ProgramWindow
}