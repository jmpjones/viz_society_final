export function GradientBar({ color }) {
    const gradientCSS = `linear-gradient(to top, #ffffff, ${color})`;
    return (
        <div className="gradient-bar-container">
            <div className="gradient-bar" style={{ background: gradientCSS }}>
                <span style={{color: "white"}}>{1}</span>
                <span style={{color: "black"}}>0</span>
            </div>
            <style jsx>{`
                .gradient-bar-container {
                    position: absolute; /* Set position to absolute */
                    top: 150px; /* Adjust top position as needed */
                    right: 0px; /* Adjust right position as needed */
                    display: flex;
                    height: 300px; /* Ensure the minimum height is 300px */
                    flex-direction: column;
                    align-items: center;
                    padding: 10px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    border-radius: 8px;
                }
                .gradient-bar {
                    width: 40px; /* Width of the gradient bar */
                    height: 90%; /* Fill the container height */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 10px 0;
                }
                .gradient-bar span {
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}
