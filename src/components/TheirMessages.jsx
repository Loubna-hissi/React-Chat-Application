const TheirMessage = ({lasMessage,message}) => {
    const isFirstMessageByUser=!lasMessage || lasMessage.sender.username!==message.sender.usename
    return ( 
        <div className="message-row">
           {isFirstMessageByUser &&
            (
           <div className="message-avatar" style={{backgroundImage:`url(${message?.sender?.avatar})`}}/>

            )}

         {(message?.attachments.length>0) ? 
            <img src={message.attachments[0].file} alt="message-attachment"  className="message-image" style={{marginLeft :isFirstMessageByUser ? '4px': '48px'}}/>
          : <div className="message" style={{float:'left',background:'#CABCDC',marginLeft :isFirstMessageByUser ? '4px': '48px'}}>
                {message.text}
            </div>
       } 
        </div>
     );
}
 
export default TheirMessage;