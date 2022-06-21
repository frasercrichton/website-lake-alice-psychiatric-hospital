import React, { useState } from 'react'
import { Remark } from 'react-remark'
/* eslint-disable import/no-webpack-loader-syntax */
import Content from '!@mdx-js/loader!./info.mdx'

const Markdown = () => (
  <div>
    <Content />
  </div>
)

export default Markdown
