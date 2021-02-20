interface IClipBoard {
    write(content: string): void
    read(): string
}

export default IClipBoard