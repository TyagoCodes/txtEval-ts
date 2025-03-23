interface CircleProps{
    size: number;
    color: string;
}


function Circle({ size, color } : CircleProps) {
//or if dont need to make the whole interface
//function Circle({ size, color }: { size: number; color: string }) {
    return (
        <div
            style={{
        width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: color,
            transition: 'width 0.3s, height 0.3s',
    }}
></div>
)
}




export default Circle;