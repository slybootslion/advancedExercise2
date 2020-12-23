import React, { memo, Fragment } from 'react'
import { AppFooterWrapper } from "./style";
import { footerImages, footerLinks } from "@/common/local-data";

export default memo(function LuAppFooter () {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <div className="footer-left">
          <div className="link">
            {
              footerLinks.map(link => {
                return (
                  <Fragment key={link.title}>
                    <a href={link.link}
                       target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyright">
            <span>网易公司版权所有©1997-2020</span>
            <span>
            杭州乐读科技有限公司运营：
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
               rel="noopener noreferrer"
               target="_blank">浙网文[2018]3506-263号</a>
          </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
            举报邮箱：
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
          </span>
          </div>
          <div className="info">
            <span>粤B2-20090191-18</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer"
               target="_blank">
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </div>
        <ul className="footer-right">
          {
            footerImages.map(img => {
              return (
                <li className="item" key={img.link}>
                  <a className="link" href={img.link}
                     target="_blank"
                     rel="noopener noreferrer"> </a>
                  <span className="title">{img.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </AppFooterWrapper>
  )
})
