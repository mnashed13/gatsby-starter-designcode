import React from 'React'
import DashboardHeader from '../components/DashboardHeader'
import '../layouts/Messages.css'
import ChatSession from '../components/ChatSession'
import NewChatBtn from '../components/NewChatBtn'
import '../layouts/chatApp.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import { makeMainRoutes } from './routes';


// routes Constant 

// const routes = makeMainRoutes();

// ReactDOM.render(
//     routes,
//     document.getElementById('root')
// );

const ChatApp = () => (
    <div>
        {/* <PageStyle> */}
        <div className="ChatPage">
            <headingStyle>
                <DashboardHeader />
                {/* Messages Section  */}
                <div className="MessagesSection">
                    {/* <img src="https://https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"/> */}
                    <h4>Michael Nashed</h4>
                    <h5>Online</h5>
                </div>
                <div className="ChatSection">
                    <h3>Chat</h3>
                    <input type="text" placeholder="Search Chats" />
                    <ChatSession
                        avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        name="John Smith"
                        status="Online"
                    />
                    <ChatSession
                        avatar="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=702&q=80"
                        name="Karl Bradshaw"
                        status="Online"
                    />
                    <ChatSession
                        avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        name="Deejai Barke"
                        status="Online"
                    />

                    <ChatSession
                        avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                        name="Carly Beck"
                        status="Online"
                    />å


                    <NewChatBtn />
                    {/* <div class="MessagingSection">
                        <input type="text" placeholder="Search Chats" />

                    </div> */}

                </div>


            </headingStyle>
            {/* </PageStyle> */}
        </div>
    </div>
)

export default ChatApp


