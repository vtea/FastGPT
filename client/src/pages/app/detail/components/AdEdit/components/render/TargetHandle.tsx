import React, { useMemo } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Handle, OnConnect, Position } from 'reactflow';
import { FlowValueTypeEnum, FlowValueTypeStyle } from '@/constants/flow';

interface Props extends BoxProps {
  handleKey: string;
  valueType?: `${FlowValueTypeEnum}`;
  onConnect?: OnConnect;
}

const TargetHandle = ({ handleKey, valueType, onConnect, ...props }: Props) => {
  const valueStyle = useMemo(
    () =>
      valueType
        ? FlowValueTypeStyle[valueType]
        : (FlowValueTypeStyle[FlowValueTypeEnum.other] as any),
    []
  );

  return (
    <Box
      position={'absolute'}
      top={'50%'}
      left={'-16px'}
      transform={'translate(50%,-50%)'}
      {...props}
    >
      <Handle
        style={{
          width: '12px',
          height: '12px',
          ...valueStyle
        }}
        type="target"
        id={handleKey}
        datatype={valueStyle}
        position={Position.Left}
      />
    </Box>
  );
};

export default TargetHandle;
