import { Card } from "antd";

export default function Box({children, ...otherProps}) {
    // let { title, style } = props;
    console.log("Children: ", children);
    return (
        <Card
            className="card"
            {...otherProps}
        >{children}</Card>
    );
}