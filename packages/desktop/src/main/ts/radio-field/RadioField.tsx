import {
  Box,
  Flex,
  OptionControl,
  OptionField,
  OptionFieldItem,
  Radio,
  RadioControl,
  Spacer,
  Stub,
} from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { RadioFieldOptionModel } from './RadioFieldOptionModel'
import { RadioFieldProps } from './RadioFieldProps'

export const RadioField: FC<
  RadioFieldProps<RadioFieldOptionModel<any>, any>
> = (props) =>
  props.stub ? (
    <Box maxWidth={1}>
      <Stub width={24} height={3} top={2} bottom={4} />
      <Spacer size="s">
        {(Array.isArray(props.stub) ? props.stub : [33, 38, 30]).map(
          (width: number, id: number) => (
            <Flex key={id} align="center">
              <Stub width={5} height={5} right={3} left={0.5} r={10} />
              <Box width={width} maxWidth={1}>
                <Stub width={1} height={2} top={2} bottom={2} />
              </Box>
            </Flex>
          ),
        )}
      </Spacer>
    </Box>
  ) : (
    <RadioControl<RadioFieldOptionModel<any>, any>
      tabIndex={props.tabIndex}
      options={props.options}
      value={props.value}
      equals={props.equals}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      children={(renderProps) => (
        <OptionField
          title={props.title}
          hint={props.hint}
          help={props.help}
          tabIndex={renderProps.tabIndex}
          autoFocus={props.autoFocus}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onKeyDown={renderProps.onKeyDown}
          children={renderProps.options.map((option, index) => (
            <OptionControl<any>
              key={index}
              disabled={option.disabled}
              value={option.value}
              onClick={option.onClick}
              onMouseEnter={option.onMouseEnter}
              onMouseLeave={renderProps.onMouseLeave}
              children={(renderOptionProps) => (
                <OptionFieldItem
                  disabled={option.disabled}
                  icon={
                    <Box width={6}>
                      <Radio
                        disabled={option.disabled}
                        checked={option.checked}
                        focused={option.focused}
                      />
                    </Box>
                  }
                  label={option.label}
                  description={option.description}
                  onClick={renderOptionProps.onClick}
                  onMouseEnter={renderOptionProps.onMouseEnter}
                  onMouseLeave={renderOptionProps.onMouseLeave}
                />
              )}
            />
          ))}
        />
      )}
    />
  )

RadioField.displayName = 'RadioField'
