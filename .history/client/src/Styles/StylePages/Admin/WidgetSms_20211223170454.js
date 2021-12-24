import { createGlobalStyle } from "styled-components";
export const WidgetSms = createGlobalStyle`
  .widgetSm {
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
  }

  .widgetSmTitle {
    font-size: 22px;
    font-weight: 600;
  }

  .widgetSmImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .widgetSmList {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .widgetSmListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
  }

  .widgetSmUser {
    display: flex;
    flex-direction: column;
  }

  .widgetSmUsername {
    font-weight: 600;
  }

  .widgetSmUserTitle {
    font-weight: 300;
  }

  .widgetSmButton {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
  }

  .widgetSmIcon {
    font-size: 16px !important;
    margin-right: 5px;
  }
  .widgetSmButton1 {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
  }
`;
