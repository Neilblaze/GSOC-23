import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import Confetti from "react-confetti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from "./Cards/Card";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import ModalC1 from "./CustComponents/ModalC1";

const pinGen = (len) => "*".repeat(len);

// Hook to handle modal interactions and keydown events
const useModalInteractions = () => {
  const [showModal, setShowModal] = useState(true);
  const [showModal2, setShowModal2] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleKeyDown = () => {
      if (showModal || showModal2) {
        setShowModal(false);
        setShowModal2(false);
      }
      setUserInteracted(true);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, showModal2]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowModal(false);
      if (!userInteracted) {
        setShowModal2(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout1);
    };
  }, [userInteracted]);

  useEffect(() => {
    if (showModal2) {
      const timeout2 = setTimeout(() => {
        setShowModal2(false);
      }, 10000);

      return () => {
        clearTimeout(timeout2);
      };
    }
  }, [showModal2]);

  const handleModalInteraction = () => {
    setUserInteracted(true);
    setShowModal(false);
    setShowModal2(false);
  };

  return { showModal, showModal2, handleModalInteraction };
};

const useEscKeyRedirect = (redirectFunc, isCase3) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isCase3 && event.keyCode === 27) {
        // 'ESC' key pressed and isCase3 is true
        redirectFunc();
        toast("Logout successful!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [redirectFunc, isCase3]);
};

function DashboardUI({ finger_locx }) {
  const [pageNo, defPageNo] = useState(1);
  const [pin, setPin] = useState("");
  const [lastUndo, setlastUndo] = useState(Date.now());

  const { showModal, showModal2, handleModalInteraction } = useModalInteractions();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMiniStatementModal, setShowMiniStatementModal] = useState(false);
  const [showWithdrawMoneyModal, setShowWithdrawMoneyModal] = useState(false);

  const toastShownRef = useRef(false);

  const showToastOnce = (msg, type) => {
    if (!toastShownRef.current) {
      toastShownRef.current = true;
      toast[type](msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onClose: () => {
          toastShownRef.current = false; // Reset the flag after the toast is closed
        },
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (showMiniStatementModal) {
        setShowMiniStatementModal(false);
        setShowConfetti(false);
      }
    };
  
    const handleMouseClick = (event) => {
      if (showMiniStatementModal) {
        setShowMiniStatementModal(false);
        setShowConfetti(false);
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleMouseClick); 

    let modalTimeout;

    if (showMiniStatementModal) {
      modalTimeout = setTimeout(() => {
        setShowMiniStatementModal(false);
      }, 9300);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleMouseClick);
      clearTimeout(modalTimeout);
    };
  }, [showMiniStatementModal]);
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (showWithdrawMoneyModal) {
        setShowWithdrawMoneyModal(false);
      }
    };

    const handleMouseClick = (event) => {
      if (showWithdrawMoneyModal) {
        setShowWithdrawMoneyModal(false);
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleMouseClick); 

    let timeoutz;
    if (showWithdrawMoneyModal) {
      timeoutz = setTimeout(() => {
        setShowWithdrawMoneyModal(false);
      }, 5000);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleMouseClick);
      clearTimeout(timeoutz);
    };
  }, [showWithdrawMoneyModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 8 && pageNo === 2) {
        // Backspace key pressed and pageNo is 2 (case 2)
        if (pin.length > 0) {
          setPin((prevPin) => prevPin.slice(0, -1));
        } else {
          showToastOnce("It's already empty!", "warning");
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pin, pageNo]);

  if (
    finger_locx &&
    finger_locx[20].x > finger_locx[8].x &&
    Date.now() - 1000 > lastUndo
  ) {
    setPin(pin.slice(0, -1));
    setlastUndo(Date.now());
  }

  const login = () => {
    defPageNo(2);
  };

  const redirectToCase1 = () => {
    defPageNo(1);
  };

  useEscKeyRedirect(redirectToCase1, pageNo === 3);

  const enterPin = () => {
    if (pin === "") return showToastOnce("PIN cannot be empty!", "error");
    else if (pin.length !== 4 || pin !== "1234") return showToastOnce("Wrong PIN", "error");
    else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        defPageNo(3);
      }, 2000);
    }
  };

  const addPin = (n) => {
    if (pin.length < 8) {
      setPin(pin + String(n));
    } else {
      showToastOnce("Max Input Reached", "warn");
    }
  };

  switch (pageNo) {
    case 1:
      return (
        <div
          id="panel-ui"
          className="absolute top-0 w-screen overflow-hidden h-screen flex items-center justify-center text-white p-10"
        >
          <ToastContainer />
          <ModalC1
            showModal={showModal}
            showModal2={showModal2}
            handleModalInteraction={handleModalInteraction}
          />
              <div className="absolute top-2 left-3 p-4 pointer-events-none">
                <img
                  src="/main_logo.png"
                  alt=""
                  style={{ width: 180, height: 26 }}
                />
              </div>
              <svg
                className="absolute top-4 left-56 animate-spin h-4 mt-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <Card4
                onClick={login}
                className="h-40 w-80 flex flex-col items-center justify-center relative"
              >
                <img
                  src="/click_indicator.png"
                  alt=""
                  className="absolute -top-6 -right-6 w-16 h-16"
                />
                <div className="text-3xl font-medium uppercase underline font-color text-yellow-300">
                  Login
                </div>
                <div className="mt-2 text-xl text-center">
                  Click here to Login 🔓
                </div>
              </Card4>
              <div className="absolute bottom-1 w-screen text-center mb-4 text-gray-500 text-sm">
                Utilize the 👌 gesture using your <b>Right Hand</b> to redirect to the next screen by hovering over the <b>LOGIN</b> card.
              </div>
            </div>
          );
    case 2:
      return (
        <div
          id="panel-ui"
          className="absolute top-0 w-screen overflow-hidden h-screen flex flex-col items-center justify-center text-white p-10"
        >
          <ToastContainer />
          <div className="flex items-center">
            <div className="text-5xl mr-6 font-medium uppercase">
              Enter your PIN
            </div>
            <div className="flex justify-center items-center mt-2 mr-4">
              <img
                src="/bounce-arrow-right.gif"
                alt="Rotated GIF"
                className="w-20 h-20 transform -rotate-90 pointer-events-none"
              />
            </div>
            <div className="bg-gray-900 rounded px-8 py-2 mt-2 ml-4 text-4xl font-mono w-64 text-center tracking-widest h-14 border-2 border-purple-400 relative">
              {pinGen(pin.length)}
              {pin.length < 8 && (
                <span className="inline-block w-4 h-1 bg-white animate-blink"></span>
              )}
            </div>
          </div>

          <br />

          <div className="grid grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <Card
                key={number}
                className="h-20 flex items-center justify-center text-4xl"
                onClick={() => addPin(number)}
              >
                {number}
              </Card>
            ))}
            {isProcessing ? (
              <div className="h-20 col-span-2 border-indigo-500 border-4 flex items-center justify-center text-2xl font-medium rounded-xl">
                PROCESSING 
                <svg className="animate-spin h-5 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-70" fill="blue" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : (
              <Card2
                className="h-20 col-span-2 border-green-500 border-4 flex items-center justify-center text-2xl font-medium"
                onClick={enterPin}
              >
                ✅ SUBMIT
              </Card2>
            )}

            <div className="absolute top-2 left-3 p-4 pointer-events-none">
              <img
                src="/main_logo.png"
                alt=""
                style={{ width: 180, height: 26 }}
              />
            </div>
            <div className="absolute top-2 left-52 p-4 pointer-events-none">
              <img
                src="/verified_blue.png"
                alt=""
                style={{ width: 32, height: 32 }}
              />
            </div>
          </div>

          <div className="absolute bottom-32 w-screen text-center mb-4 text-gray-500 text-sm">
            🔑 Default PIN is <b>1 2 3 4</b>
          </div>

          <div className="absolute bottom-0 w-screen text-center mb-4 text-gray-400 text-sm">
            We neither collect, store, or send any data. The video is processed
            on your browser itself & is GDPR compliant.
          </div>
        </div>
      );

    case 3:
      const accountInfo = {
        holder: "Pratyay Banerjee",
        balance: "$550",
      };

      const services = [
        {
          title: "Withdraw Money",
          description: "Withdraw cash 💵 from your bank account.",
        },
        {
          title: "Mini Statement",
          description: "Log recent transactions of your bank account.",
        },
      ];

      return (
        <div
          id="panel-ui"
          className="absolute top-0 w-screen overflow-hidden h-screen flex flex-col items-center justify-center text-white p-10"
        >
          <ToastContainer />
          {/* TODO */}
          {/* <div className="flex flex-col items-center -mr-64 mb-6">
            <div className="text-xl text-gray-400 font-mono self-end">
              Account Holder
            </div>
            <div className="text-4xl font-mono self-end">
              {accountInfo.holder}
            </div>

            <div className="text-xl text-gray-400 font-mono self-end mt-4">
              Balance
            </div>
            <div className="text-4xl font-mono self-end">
              {accountInfo.balance}
            </div>
          </div> */}

          {/* Hardcoded image :p */}
          <div className="flex">
            <div className="items-center">
              <img
                src={"/user_details.png"}
                alt=""
                className="-mt-20 mr-48 mb-12 pointer-events-none"
                style={{ width: "500px" }}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl text-gray-400 font-mono self-end -mt-20 mr-8">
                Balance
              </div>
              <div className="text-4xl font-mono self-end mr-8 mb-12">
                {accountInfo.balance}
              </div>
            </div>
          </div>

          <div className="border-t border-white w-64 mb-12"></div>

          <div className="flex flex-row">
            {services.map((service, index) => (
              <Card3
                key={index}
                className={
                  index === 0
                    ? "h-48 w-96 mr-6 border-blue-500 border-4 flex flex-col items-center justify-center"
                    : "h-48 w-96 ml-6 border-blue-500 border-4 flex flex-col items-center justify-center"
                }
                onClick={() => {
                  if (service.title === "Mini Statement") {
                    setShowMiniStatementModal(true);
                    setShowConfetti(true);
                    showToastOnce("Success! 🎉", "success");
                  } else if (service.title === "Withdraw Money") {
                    setShowWithdrawMoneyModal(true);
                    showToastOnce("Work-In-Progress", "warn");
                  }
                }}
              >
                <div className="uppercase underline font-bold text-2xl text-yellow-500 text-center">
                  {service.title}
                </div>
                <div className="mt-2 text-center">{service.description}</div>
              </Card3>
            ))}
          </div>

          <div className="absolute bottom-44 flex items-center justify-center w-screen text-gray-500 text-sm">
            <span className="mr-2">Press <b>ESC</b> to logout</span>
            <img
              src="/logout_icon2.png"
              alt=""
              style={{ width: 16, height: 16 }}
            />
          </div>

          <div className="absolute bottom-0 w-screen text-center mb-4 text-gray-400 text-sm">
            We neither collect, store, or send any data. The video is processed
            on your browser itself & is GDPR compliant.
          </div>
          {showConfetti && (
            <Confetti
              recycle={false}
              style={{ pointerEvents: "none", zIndex: 1000 }}
              numberOfPieces={300}
              colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A",]}
              onConfettiComplete={() => setShowConfetti(false)}
            />
          )}
          {showMiniStatementModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-90 bg-black">
              <img src="./miniStatemnt.gif" alt="" className="w-3/5 h-3/5 transition-opacity duration-500 pointer-events-none" />
            </div>
          )}
          {showWithdrawMoneyModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-90 bg-black">
              <img src="./withdrawMoney.gif" alt="" className="w-3.5/5 3.5/5 transition-opacity duration-500 pointer-events-none" />
            </div>
          )}
        </div>
      );

    default:
      return <></>;
  }
}

const PropMapFromState = (state) => ({
  finger_locx: state.hand.finger_locx,
});

export default connect(PropMapFromState)(DashboardUI);
