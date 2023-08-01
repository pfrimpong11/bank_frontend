import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransferScreen = () => {
    const navigate = useNavigate();
    // const acnNumber =  useRef(null)
    const [accountData, setAccountData] = useState(false);
    const [to_account_number, setto_account_number] =  useState("")
    const [from_account_number, setSenAcnt] =  useState("")
    const [amount,setAmt ] = useState("")


    const handleVerifyPress = async () => {
     
    const res =  await  axios.get("",{
            headers:{
                withCredentials:true
            }
        })

        if(!res.data.ok){
            alert("Account number does not exist")
        }
        else{
            alert("Account Number  is OK")
        }
        setAccountData(res.data.success);
    };

    const handleSendPress = async () => {

       const payload = {
           from_account_number,
           to_account_number,
           amount
       }

       const res =  await axios.post("",JSON.stringify(payload),{
        headers:{
            withCredentials:true
        }
       })

       if (!res.data.ok){
        alert("Transaction Failed")

        return
       }
     
        navigate("/Status",{state:{amount:amount}}); // Navigate to TransactionCompleteScreen
    };


    return (
        <div style={styles.container}>
            <div style={styles.headerBox}>
                <h2 style={styles.headerText}>Transfer</h2>
            </div>
            <div style={styles.formContainer}>
                <div style={styles.formElement}>
                    <label style={styles.label}> Recipient Account Number</label>
                    <div style={styles.inputContainer}>
                        <input style={styles.input} type="number" placeholder="Enter account number" onChange={(e)=>setto_account_number(e.target.value)} required/>
                        <button style={styles.verifyButton} onClick={handleVerifyPress}>Verify</button>
                    </div>
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Sender Account Number</label>
                    <div style={styles.input}>
                        <input type='number' style={styles.outputText} onChange={(e)=>setSenAcnt(e.target.value)} required>{accountData.name}</input>
                    </div>
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Reference</label>
                    <div>
                        <input style={styles.input} type="text" placeholder="Enter reference" />
                    </div>
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Amount</label>
                    <div>
                        <input style={styles.input} type="number" placeholder="Enter amount"  required onChange={(e)=>setAmt(e.target.value)}/>
                    </div>
                </div>
                <button style={styles.sendButton} onClick={handleSendPress}>Send</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerBox:{
    backgroundColor: '#66B5E1',
    borderRadius: '10px',
    paddingLeft: '25%',
    width: '70%',
    marginBottom: '20px',
    marginTop: '15px',
    alignItems: 'center',
    },
    headerText: {
        color: '#fff',
    },
    formContainer: {
        paddingTop: 20,
    },
    formElement: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        paddingBottom: '5px',
        paddingLeft: '5px',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        height: 40,
        border: '1px solid lightgray',
        borderRadius: '25px',
        padding: '0 10px',
        marginBottom: 5,
        backgroundColor: 'lightgray',
    },
    outputText: {
        padding: 10,
    },
    verifyButton: {
        backgroundColor: '#66B5E1',
        borderRadius: '25px',
        padding: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginLeft: '10px',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderWidth: 0,
    },
    sendButton: {
        backgroundColor: '#66B5E1',
        borderRadius: '25px',
        alignItems: 'center',
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        borderWidth: 0,
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '15px',
        paddingBottom: '15px',
    },
};

export default TransferScreen;
