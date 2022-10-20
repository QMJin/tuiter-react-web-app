import React from "react";

const HomePostItem = (
    {
      post = {
        "username": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "image": "inspiration.jpeg",
        "title": "Amazing show about @Inspiration4x mission!",
        "icon": "emicon.png",
        "header": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "content": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space",
        "comment": "4.2K",
        "share": "3.5K",
        "like": "37.5K"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">

          <div className="col-2">
            <img width={50} className="rounded-circle me-5" src={`/images/${post.icon}`}/>
          </div>

          <div className="col-10">
            <div className="row">
              <div className="col-11">
                <span className="fw-bolder"> {post.username} <i className="bi bi-check-circle-fill"></i></span>
                <span className="text-secondary"> @{post.handle} &#183; {post.time}</span>
              </div>
              <div className="col-1">
                &#183;&#183;&#183;
              </div>
            </div>

            <div>
              {post.title}
            </div>

            <div className="mt-2">
              <div>
                <img className="rounded-3" src={`/images/${post.image}`} width="100%"/>
              </div>
              <div c>
                <div className="fw-bolder mt-2">
                  {post.header}
                </div>
                <div className="text-secondary">
                  {post.content}
                </div>
              </div>
            </div>

            <div className="row text-secondary mt-2 mb-2">
              <div className="col"><i className="bi bi-chat"></i> {post.comment}</div>
              <div className="col">&#x21C6; {post.share}</div>
              <div className="col">&#9825; {post.like}</div>
              <div className="col"><i className="bi bi-box-arrow-up"></i></div>
            </div>
          </div>

        </div>
      </li>
  );
};

export default HomePostItem;