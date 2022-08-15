import { ethers } from 'ethers'
import { useEffect, useState } from 'react';

function MetamaskConnect() {

    const [account, setAccount] = useState<any>();
    const [balance, setBalance] = useState<any>();

    useEffect(() => {
        if(localStorage.getItem('isMetamaskConnected') === 'true') {
            connectHandler();  
        }
    }, [])

    useEffect(() => {
        getBalance()
    }, [account])

    const connectHandler = async () => {
        if (window.ethereum) {
            try {
                console.log('clicked')
                const res = await window.ethereum.request({method: "eth_requestAccounts"})
                localStorage.setItem('isMetamaskConnected', 'true');
                setAccount(res[0])
            } catch(error) {
                console.log(error);
            }
        }
    }

    const getBalance = async () => {
        if(account) {
            const balance = await window.ethereum.request({method: "eth_getBalance", params: [account.toString(), "latest"]})
            setBalance(ethers.utils.formatEther(balance))
        } }

    return(
        <div className='flex w-full h-10 text-white bg-red-200 justify-center items-center'>
            { !balance && <button onClick={connectHandler} className="bg-black w-20 border-2 rounded-lg justify-self-start h-8 m-2" >connect</button> }
            {balance? `Connected, balance: ${balance} ETH`: "Not Connected"} 
        </div>
    )
}

export default MetamaskConnect;