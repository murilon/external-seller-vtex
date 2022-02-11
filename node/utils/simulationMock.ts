import {
  SimulationInput,
  SimulationItem,
} from '../typings/fullfilmentSimulation'

export const getItemsInfoFromInput = (input: SimulationInput) =>
  input.items.map((item) => {
    const { id, quantity, seller } = item

    return <SimulationItem>{
      id,
      quantity,
      seller,
      measurementUnit: 'un',
      merchantName: null,
      price: 999,
      priceTags: [],
      priceValidUntil: null,
      requestIndex: 0,
      unitMultiplier: 1,
      offerings: [
        {
          type: "Rótulo ",
          id: "teste offerings",
          name: "teste offerings",
          price: 55555
        }
        
      ],
      attachmentOfferings: [
        {
          name: "teste attachmentOfferings",
          required: false,
          schema: {
            Name: {
              maximumNumberOfCharacters: 10,
              domain: ['10']
            },
            Number: {
              maximumNumberOfCharacters: 11,
              domain: ['11']
            }
          }
        }
      ]


    }
  })
