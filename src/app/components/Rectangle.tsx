interface RectangleProps {
    color: string;
}

export default function Rectangle({ color }: RectangleProps) {
    const bgColor = `bg-${color}-500`
    return <div className={`${bgColor} w-80 h-32`}></div>;
}