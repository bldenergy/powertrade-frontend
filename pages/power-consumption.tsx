import styles from '../styles/shared.module.css'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import * as grpcWeb from 'grpc-web'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import HeadComponent from '../components/head'
import { PowerUsageServiceClient } from '../grpc/powertrade/powerusage/v1alpha/Powerusage_serviceServiceClientPb'
import {
  GetPowerUsageResponse,
  GetPowerUsageRequest
} from '../grpc/powertrade/powerusage/v1alpha/powerusage_pb'
import en from '../locales/en'
import zh from '../locales/zh'

const LineChart: any = dynamic(
  () => import('../components/Charts/Line').then((linechart: any) => linechart),
  { ssr: false }
)

const BarChart: any = dynamic(
  () => import('../components/Charts/Bar').then((chart: any) => chart),
  { ssr: false }
)

const Consumption: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : zh
  const [powerUsage, setPowerUsage]: any = useState()

  useEffect(() => {
    const apiCall = setInterval(() => {
      const powerUsageService = new PowerUsageServiceClient(
        `http://${window.location.hostname}:8081`,
        null,
        null
      )
      var request = new GetPowerUsageRequest()
      const call = powerUsageService.getPowerUsage(
        request,
        { 'custom-header-1': 'value1' },
        (err: grpcWeb.RpcError, response: GetPowerUsageResponse) => {
          setPowerUsage(response.toObject())
        }
      )
    }, 1000)
    return () => clearInterval(apiCall)
  }, [powerUsage])

  return (
    <div className={styles.container}>
      <HeadComponent title="BLD PowerTrade - Power Consumption" />
      <main
        className={styles.main}
        style={{ marginTop: '2.5rem', justifyContent: 'start' }}
      >
        <Heading style={{ marginBottom: '1.25rem' }}>Meters</Heading>
        {powerUsage?.metersList.map((meter: any, i: any) => {
          return (
            <Accordion allowMultiple width={'100%'} key={i}>
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton key={meter?.id}>
                        <Box flex="1" textAlign="left">
                          {i + 1} - {meter?.id}
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="0.75rem" />
                        ) : (
                          <AddIcon fontSize="0.75rem" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <UnorderedList style={{ marginBottom: '1.25rem' }}>
                        <ListItem>
                          Frequency: {Math.round(meter?.frequency)}
                        </ListItem>
                        <ListItem>
                          Voltage: {Math.round(meter?.voltage)}
                        </ListItem>
                        <ListItem>Watt: {Math.round(meter?.watt)}</ListItem>
                        <ListItem>Epoch: {meter?.epoch?.seconds}</ListItem>
                      </UnorderedList>
                      <LineChart
                        meterWatt={meter?.watt}
                        timeNow={meter?.epoch?.seconds}
                      />
                      <Heading as="h4" size="md">
                        Channels
                      </Heading>
                      {meter?.channelsList.map((channel: any, i: any) => {
                        return (
                          <AccordionItem key={channel?.alias}>
                            {({ isExpanded }) => (
                              <>
                                <h2>
                                  <AccordionButton key={i}>
                                    <Box flex="1" textAlign="left">
                                      {channel?.number} - {channel?.alias}
                                    </Box>
                                    {isExpanded ? (
                                      <MinusIcon fontSize="0.75rem" />
                                    ) : (
                                      <AddIcon fontSize="0.75rem" />
                                    )}
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} key={i}>
                                  <UnorderedList
                                    style={{ marginBottom: '1.25rem' }}
                                  >
                                    <ListItem>
                                      Watt: {Math.round(channel?.watt)}
                                    </ListItem>
                                  </UnorderedList>
                                  <Heading as="h5" size="sm">
                                    Devices
                                  </Heading>
                                  {channel?.devicesList.map(
                                    (device: any, i: any) => {
                                      return (
                                        <>
                                          <AccordionItem key={device?.id}>
                                            {({ isExpanded }) => (
                                              <>
                                                <h2>
                                                  <AccordionButton>
                                                    <Box
                                                      flex="1"
                                                      textAlign="left"
                                                    >
                                                      {device?.id}
                                                    </Box>
                                                    {isExpanded ? (
                                                      <MinusIcon fontSize="0.75rem" />
                                                    ) : (
                                                      <AddIcon fontSize="0.75rem" />
                                                    )}
                                                  </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                  <UnorderedList>
                                                    <ListItem>
                                                      Watt:
                                                      {Math.round(device?.watt)}
                                                    </ListItem>
                                                  </UnorderedList>
                                                </AccordionPanel>
                                              </>
                                            )}
                                          </AccordionItem>
                                        </>
                                      )
                                    }
                                  )}
                                </AccordionPanel>
                              </>
                            )}
                          </AccordionItem>
                        )
                      })}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          )
        })}
      </main>
    </div>
  )
}

export default Consumption
