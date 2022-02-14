const Modal = ({show ,header, error,closeModal,children}) => {

    return (
        <div style={{
            display: show ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1000,

            background: "rgba(72,72,72,0.5)"
        }}>

            <div style={{
                background: "#FFF",
                height: "400px",
                width: "400px",

            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                    padding: "10px"
                }}>
                    <div>{header}</div>
                    <button className='btn' onClick={closeModal}>X</button>
                </div>
                <hr style={{
                    marginTop: "10px"
                }}/>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div style={{
                        color: "red"
                    }}>{error}</div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
