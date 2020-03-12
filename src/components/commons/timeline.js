import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

export const TimelinePage = () => {
  return (
    <Timeline>
      <Event interval={"02/11/2020"} title={""} subtitle={""}>
        Task <a href="#!">MY First Task</a> added by <a href="#!">You</a>
      </Event>
      <Event interval={"02/07/2020"} title={""} subtitle={""}>
        Email sent with Subject, Trial Email from Bay Design
      </Event>
      <Event interval={"02/07/2020"} title={""} subtitle={""}>
        Contact added to company <a href="#!">Info Systems</a> by <a href="#!">You</a>
      </Event>
      <Event interval={"02/07/2020"} title={""} subtitle={""}>
        Contact Added (MAnually) <br/> with name Ronald by <a href="#!">You</a>
      </Event>
    </Timeline>
  );
};

export default TimelinePage;
