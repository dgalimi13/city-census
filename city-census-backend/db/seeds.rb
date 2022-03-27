city = City.create(name: 'New York City', population: 35000000)

relocation = Relocation.create(city_id: 1, amount: 1000, kind: 'departure', date: Date.today, reason: 'Closed Business')
