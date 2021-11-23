import styled from "styled-components";
export const Buttons = styled.a`
  .btn {
    display: inline-block;
    padding: 0.8rem 3rem;
    border: 0.2rem solid var(--red);
    color: var(--red);
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
    z-index: 0;
    margin-top: 1rem;
  }

  .btn::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background: var(--red);
    transition: 0.3s linear;
    z-index: -1;
  }

  .btn:hover::before {
    width: 100%;
    left: 0;
  }

  .btn:hover {
    color: #fff;
  }
`;
