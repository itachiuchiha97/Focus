hrs = input('Enter Hours:')
rph = input('Enter Rate per Hour:')

fhrs = float(hrs)
frph = float(rph)

if fhrs<=40:
    gpay = fhrs*frph
else:
	gpay = 40*frph + (fhrs-40)*1.5*frph

print(gpay)