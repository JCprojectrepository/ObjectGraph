import Hero from '@/containers/hero'
import NewsList from '@/containers/news'
import Mission from '@/containers/mission'
import Service from '@/containers/service'
import Company from '@/containers/company'



export default function Index(){
  return (
    <>
        <Hero />
        <Mission />
        <NewsList />
        <Service />
        <Company />

    </>
  )
}