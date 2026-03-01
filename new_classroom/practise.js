function createCard(title, channel, views, monthsAgo, thumbnail,timestamp){

  // get container
  let container = document.getElementById("container");

  // create main card div
  let card = document.createElement("div");
  card.className = "video-card";
  
  //thumbcontainer
  let thumbcontainer= document.createElement("div");
   thumbcontainer.className = "thumb-container";

  // thumbnail
  let thumbnailElement = document.createElement("img");
  thumbnailElement.className = "thumbnail";
  thumbnailElement.src = thumbnail;

  // details div
  let details = document.createElement("div");
  details.className = "video-details";

  // title
  let titleElement = document.createElement("div");
  titleElement.className = "title";
  titleElement.innerText = title;

  // channel
  let channelElement = document.createElement("div");
  channelElement.className = "channel";
  channelElement.innerText = channel;

  // stats
  let statsElement = document.createElement("div");
  statsElement.className = "stats";
  statsElement.innerText = formatViews(views) + " views • " + monthsAgo + " months ago";



  //timestamp
  let timeElement=document.createElement("div");
  timeElement.className="timeElement";
  timeElement.innerText=timestamp;

  // append elements

    details.appendChild(titleElement);
    channelElement.appendChild(statsElement);
    details.appendChild(channelElement);
    thumbcontainer.append(thumbnailElement);
    thumbcontainer.append(timeElement);
    card.appendChild(thumbcontainer);
    card.appendChild(details);
    container.appendChild(card);
    }
 function formatViews(views){

    if(views >= 1000000000){
        return (views / 1000000000).toFixed(1).replace(".0","") + "B";
    }

    else if(views >= 1000000){
        return (views / 1000000).toFixed(1).replace(".0","") + "M";
    }

    else if(views >= 1000){
        return (views / 1000).toFixed(1).replace(".0","") + "K";
    }

    else{
        return views;
    }

}
createCard(
"Ekaki Chapter 1 : Presence | Ashish Chanchlani",
"ashish chanchlani vines",
"4000000",
"3",
"https://i.pinimg.com/736x/b0/05/50/b00550464ea1a5056cab210304e557e7.jpg",
"30:25");

createCard(
"Ekaki Chapter 2 : Arrival | Ashish Chanchlani",
"ashish chanchlani vines",
"28000000000",
"3",
"https://i.pinimg.com/736x/4d/20/7c/4d207cad7d422400b04d2011ec574f7c.jpg",
"30:50");

createCard(
"Ekaki Chapter 3 : Invasion | Ashish Chanchlani",
"ashish chanchlani vines",
"21000",
"2",
"https://i.pinimg.com/1200x/5b/df/15/5bdf152819d243e59899af71605abdda.jpg",
"28:50");

createCard(
"Ekaki Chapter 4 : Skyfall | Ashish Chanchlani",
"ashish chanchlani vines",
"22000000",
"1",
"https://i.pinimg.com/1200x/12/54/0d/12540d76661097efd7bbef7f24acce67.jpg",
"31:40");