import React from 'react'
import { Button, Space, Alert } from 'antd'

export default function AlertMess() {
  return (
    <Alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
    action={
      <Space direction="vertical">
        <Button size="small" type="primary">
          Accept
        </Button>
        <Button size="small" danger type="ghost">
          Decline
        </Button>
      </Space>
    }
    closable
  />
  )
}
